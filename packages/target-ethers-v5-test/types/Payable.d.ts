/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PayableInterface extends ethers.utils.Interface {
  functions: {
    "non_payable_func()": FunctionFragment;
    "payable_func()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "non_payable_func",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payable_func",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "non_payable_func",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payable_func",
    data: BytesLike
  ): Result;

  events: {};
}

export class Payable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PayableInterface;

  functions: {
    non_payable_func(overrides?: Overrides): Promise<ContractTransaction>;

    payable_func(overrides?: PayableOverrides): Promise<ContractTransaction>;
  };

  non_payable_func(overrides?: Overrides): Promise<ContractTransaction>;

  payable_func(overrides?: PayableOverrides): Promise<ContractTransaction>;

  callStatic: {
    non_payable_func(overrides?: Overrides): Promise<void>;

    payable_func(overrides?: PayableOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    non_payable_func(overrides?: Overrides): Promise<BigNumber>;

    payable_func(overrides?: PayableOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    non_payable_func(overrides?: Overrides): Promise<PopulatedTransaction>;

    payable_func(overrides?: PayableOverrides): Promise<PopulatedTransaction>;
  };
}
