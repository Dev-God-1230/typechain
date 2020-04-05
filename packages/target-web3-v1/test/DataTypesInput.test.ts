import Web3 from 'web3'

import { createNewBlockchain, deployContract, typedAssert, q18 } from './common'
import { DataTypesInput } from '../types/DataTypesInput'

describe('DataTypesInput', () => {
  let contract!: DataTypesInput
  let web3: Web3
  beforeEach(async () => {
    const { web3: _web3, accounts } = await createNewBlockchain()
    web3 = _web3
    contract = await deployContract<DataTypesInput>(web3, accounts, 'DataTypesInput')
  })

  it('works', async () => {
    typedAssert(await contract.methods.input_uint8('42').call(), '42')
    typedAssert(await contract.methods.input_uint8(42).call(), '42')

    typedAssert(await contract.methods.input_uint256(q18(1)).call(), q18(1))
    typedAssert(await contract.methods.input_uint256(1).call(), '1')

    typedAssert(await contract.methods.input_int8('42').call(), '42')
    typedAssert(await contract.methods.input_int8(42).call(), '42')

    typedAssert(await contract.methods.input_int256(q18(1)).call(), q18(1))
    typedAssert(await contract.methods.input_int256(1).call(), '1')

    typedAssert(await contract.methods.input_bool(true).call(), true)

    typedAssert(
      await contract.methods.input_address('0x70b144972C5Ef6CB941A5379240B74239c418CD4').call(),
      '0x70b144972C5Ef6CB941A5379240B74239c418CD4',
    )

    typedAssert(await contract.methods.input_bytes1('0xaa').call(), '0xaa')
    typedAssert(await contract.methods.input_bytes1([0]).call(), '0x00')

    typedAssert(await contract.methods.input_bytes(web3.utils.fromAscii('TypeChain')).call(), '0x54797065436861696e')

    typedAssert(await contract.methods.input_string('TypeChain').call(), 'TypeChain')
  })
})
