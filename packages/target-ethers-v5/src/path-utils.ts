import { camelCase, groupBy, mapValues, uniq } from 'lodash'
import { posix } from 'path'
import { FileDescription, normalizeName } from 'typechain'

export function lowestCommonPath(paths: string[]) {
  const pathParts = paths.map((path) => path.split(/[\\/]/))
  const commonParts = pathParts[0].filter((part, index) => pathParts.every((parts) => parts[index] === part))
  return commonParts.join('/')
}

export function generateBarrelFiles(
  paths: string[],
  { typeOnly, postfix = '' }: { typeOnly: boolean; postfix?: string },
): FileDescription[] {
  const fileReexports: Record<string, string[] | undefined> = mapValues(
    groupBy(paths.map(posix.parse), (p) => p.dir),
    (ps) => ps.map((p) => p.name),
  )

  const directoryPaths = Object.keys(fileReexports).filter((path) => path.includes('/'))
  const directoryReexports: Record<string, string[] | undefined> = mapValues(
    groupBy(directoryPaths.map(posix.parse), (p) => p.dir),
    (ps) => ps.map((p) => p.base),
  )

  const barrelPaths = new Set(Object.keys(directoryReexports).concat(Object.keys(fileReexports)))
  const newPaths: string[] = []

  for (const directory of barrelPaths) {
    if (!directory) continue

    const path = directory.split('/')
    while (path.length) {
      const dir = path.slice(0, -1).join('/')
      const name = path[path.length - 1]

      if (!(dir in directoryReexports)) {
        directoryReexports[dir] = [name]
        newPaths.push(dir)
      } else if (!directoryReexports[dir]!.find((x) => x === name)) {
        directoryReexports[dir]!.push(name)
      }

      path.pop()
    }
  }

  return uniq([...barrelPaths, ...newPaths]).map((path) => {
    const nestedDirs = (directoryReexports[path] || []).sort()

    const namespacesExports = nestedDirs
      .map((p) => {
        const namespaceIdentifier = camelCase(p)

        if (typeOnly)
          return [
            `import type * as ${namespaceIdentifier} from './${p}';`,
            `export type { ${namespaceIdentifier} };`,
          ].join('\n')

        return `export * as ${namespaceIdentifier} from './${p}';`
      })
      .join('\n')

    const contracts = (fileReexports[path] || []).sort()
    const namedExports = contracts
      .map((p) => {
        const exportKeyword = typeOnly ? 'export type' : 'export'
        const name = `${normalizeName(p)}${postfix}`
        // We can't always `export *` because of possible name conflicts.
        // @todo possibly a config option for user to decide?
        return `${exportKeyword} { ${name} } from './${name}';`
      })
      .join('\n')

    return {
      path: posix.join(path, 'index.ts'),
      contents: (namespacesExports + '\n' + namedExports).trim(),
    }
  })
}

/**
 * Transforms all paths matching `ContractName.sol/ContractName.json`
 */
export function shortenFullJsonFilePath(path: string) {
  const parsed = posix.parse(path)

  const sourceFileName = `${parsed.name}.sol`
  if (parsed.dir.endsWith(sourceFileName)) {
    return parsed.dir.slice(0, -sourceFileName.length) + `${parsed.name}.json`
  }

  return path
}
