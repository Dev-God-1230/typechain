/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

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

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PayableInterface;

  functions: {
    non_payable_func(overrides?: Overrides): Promise<ContractTransaction>;

    "non_payable_func()"(overrides?: Overrides): Promise<ContractTransaction>;

    payable_func(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "payable_func()"(
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  non_payable_func(overrides?: Overrides): Promise<ContractTransaction>;

  "non_payable_func()"(overrides?: Overrides): Promise<ContractTransaction>;

  payable_func(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "payable_func()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  callStatic: {
    non_payable_func(overrides?: CallOverrides): Promise<void>;

    "non_payable_func()"(overrides?: CallOverrides): Promise<void>;

    payable_func(overrides?: CallOverrides): Promise<void>;

    "payable_func()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    non_payable_func(overrides?: Overrides): Promise<BigNumber>;

    "non_payable_func()"(overrides?: Overrides): Promise<BigNumber>;

    payable_func(overrides?: PayableOverrides): Promise<BigNumber>;

    "payable_func()"(overrides?: PayableOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    non_payable_func(overrides?: Overrides): Promise<PopulatedTransaction>;

    "non_payable_func()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    payable_func(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "payable_func()"(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}