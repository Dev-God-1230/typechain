/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { TypedEventDescription, TypedFunctionDescription } from ".";

interface IERC721ReceiverInterface extends Interface {
  functions: {
    onERC721Received: TypedFunctionDescription<{
      encode([operator, from, tokenId, data]: [
        string,
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class IERC721Receiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IERC721Receiver;
  attach(addressOrName: string): IERC721Receiver;
  deployed(): Promise<IERC721Receiver>;

  on(event: EventFilter | string, listener: Listener): IERC721Receiver;
  once(event: EventFilter | string, listener: Listener): IERC721Receiver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IERC721Receiver;
  removeAllListeners(eventName: EventFilter | string): IERC721Receiver;
  removeListener(eventName: any, listener: Listener): IERC721Receiver;

  interface: IERC721ReceiverInterface;

  functions: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<ContractTransaction>;
  };

  onERC721Received(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  "onERC721Received(address,address,uint256,bytes)"(
    operator: string,
    from: string,
    tokenId: BigNumberish,
    data: Arrayish,
    overrides?: UnsignedTransaction
  ): Promise<ContractTransaction>;

  filters: {};

  estimate: {
    onERC721Received(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;

    "onERC721Received(address,address,uint256,bytes)"(
      operator: string,
      from: string,
      tokenId: BigNumberish,
      data: Arrayish,
      overrides?: UnsignedTransaction
    ): Promise<BigNumber>;
  };
}
