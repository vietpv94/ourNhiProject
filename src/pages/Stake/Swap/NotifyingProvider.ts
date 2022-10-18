import { AnchorProvider } from '@project-serum/anchor';

import {
  Signer,
  ConfirmOptions,
  Connection,
  Transaction,
  TransactionSignature,
  PublicKey,
} from '@solana/web3.js';
import { Dispatch } from 'react';
import { loading, unloading } from '@Redux/actions/loading';

interface AnchorWallet {
  signTransaction(tx: Transaction): Promise<Transaction>;
  signAllTransactions(txs: Transaction[]): Promise<Transaction[]>;
  publicKey: PublicKey;
}

export class NotifyingProvider extends AnchorProvider {
  // Function to call whenever the provider sends a transaction;
  private onTransaction: (tx: TransactionSignature | undefined, err?: Error) => void;

  private dispatch: Dispatch<any>;

  constructor(
    connection: Connection,
    wallet: AnchorWallet | undefined| any,
    opts: ConfirmOptions,
    onTransaction: (tx: TransactionSignature | undefined, err?: Error) => void,
    dispatch: Dispatch<any>
  ) {
    const newWallet = wallet as AnchorWallet;
    super(connection, newWallet, opts);
    this.onTransaction = onTransaction;
    this.dispatch = dispatch;
  }

  async sendAll(
    txs: Array<{ tx: Transaction; signers: Array<Signer> }>,
    opts?: ConfirmOptions
  ): Promise<Array<TransactionSignature>> {
    try {
      this.dispatch(loading());
      const txSigs = await super.sendAll(txs, opts);
      txSigs.forEach((sig) => {
        this.onTransaction(sig);
      });

      this.dispatch(unloading());
      return txSigs;
    } catch (err) {
      if (err instanceof Error || err === undefined) {
        this.onTransaction(undefined, err);
      }

      this.dispatch(unloading());
      return [];
    }
  }
}

export default NotifyingProvider;
