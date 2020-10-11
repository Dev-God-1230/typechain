/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { DataTypesInput } from "./DataTypesInput";

export class DataTypesInputFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DataTypesInput {
    return new Contract(address, _abi, signerOrProvider) as DataTypesInput;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "input1",
        type: "address",
      },
    ],
    name: "input_address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "input1",
        type: "bool",
      },
    ],
    name: "input_bool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input1",
        type: "bytes",
      },
    ],
    name: "input_bytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "input1",
        type: "bytes1",
      },
    ],
    name: "input_bytes1",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum DataTypesInput.Enum1",
        name: "input1",
        type: "uint8",
      },
    ],
    name: "input_enum",
    outputs: [
      {
        internalType: "enum DataTypesInput.Enum1",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "input1",
        type: "int256",
      },
    ],
    name: "input_int256",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int8",
        name: "input1",
        type: "int8",
      },
    ],
    name: "input_int8",
    outputs: [
      {
        internalType: "int8",
        name: "",
        type: "int8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8[3]",
        name: "input1",
        type: "uint8[3]",
      },
    ],
    name: "input_stat_array",
    outputs: [
      {
        internalType: "uint8[3]",
        name: "",
        type: "uint8[3]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "input1",
        type: "string",
      },
    ],
    name: "input_string",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "uint256_0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uint256_1",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypesInput.Struct1",
        name: "input1",
        type: "tuple",
      },
    ],
    name: "input_struct",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "uint256_0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uint256_1",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypesInput.Struct1",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "input2",
        type: "uint256",
      },
    ],
    name: "input_tuple",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input1",
        type: "uint256",
      },
    ],
    name: "input_uint256",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "input1",
        type: "uint8",
      },
    ],
    name: "input_uint8",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];
