import {AppScreenProps} from '@data/models';

export interface CreateTransactionProps
  extends AppScreenProps<'CreateTransaction'> {}

export type UseCreateTransactionProps = {
  transactionCategory?: 'Income' | 'Expense' | 'Transfer';
};

export interface InitValueFormik {
  amount: string;
  category: string;
  description: string;
  wallet: string;
  repeatMode: boolean;
  attachments: string;
}
