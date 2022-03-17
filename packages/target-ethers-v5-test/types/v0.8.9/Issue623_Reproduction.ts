/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface Issue623_ReproductionInterface extends utils.Interface {
  functions: {
    "createProposal()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createProposal"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createProposal",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;

  events: {
    "ProposalCreated(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
}

export type ProposalCreatedEvent = TypedEvent<
  [BigNumber[]],
  { values: BigNumber[] }
>;

export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;

export interface Issue623_Reproduction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Issue623_ReproductionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createProposal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createProposal(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createProposal(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ProposalCreated(uint256[])"(values?: null): ProposalCreatedEventFilter;
    ProposalCreated(values?: null): ProposalCreatedEventFilter;
  };

  estimateGas: {
    createProposal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createProposal(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}