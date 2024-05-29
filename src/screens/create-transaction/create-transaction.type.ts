import {AppScreenProps} from '@data/models';

export interface CreateTransactionProps
  extends AppScreenProps<'CreateTransaction'> {}

export type TransactionType = 'Income' | 'Expense' | 'Transfer';

export interface UseCreateTransactionProps {
  transactionCategory: TransactionType;
};

export interface InitValueFormik {
  amount: string;
  description: string;
  attachments: string;
  category?: string;
  wallet?: string;
  repeatMode?: boolean;
  // Transfer transaction
  fromWallet?: string;
  toWallet?: string;
};

export type InfoTransaction = InitValueFormik & {
  type: TransactionType;
}
