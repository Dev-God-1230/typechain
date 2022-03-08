/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  LibraryConsumer,
  LibraryConsumerInterface,
} from "../../v0.6.4/LibraryConsumer";

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

export class LibraryConsumer__factory {
  static readonly abi = _abi;
  static createInterface(): LibraryConsumerInterface {
    return new utils.Interface(_abi) as LibraryConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibraryConsumer {
    return new Contract(address, _abi, signerOrProvider) as LibraryConsumer;
  }
}
