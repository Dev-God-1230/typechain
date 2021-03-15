/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { LibraryConsumer } from "../LibraryConsumer";

export class LibraryConsumer__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryConsumer {
    return new Contract(address, _abi, signerOrProvider) as LibraryConsumer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "b",
        type: "uint8",
      },
    ],
    name: "someOther",
    outputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
