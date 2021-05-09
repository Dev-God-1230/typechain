/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "SafeMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeMath__factory>;
    getContractFactory(
      name: "TestContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract__factory>;
    getContractFactory(
      name: "TestContract1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract1__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}