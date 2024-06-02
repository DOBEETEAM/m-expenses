import {AppScreenProps} from '@data/models';
import {Asset} from 'react-native-image-picker';

export interface CreateTransactionProps
  extends AppScreenProps<'CreateTransaction'> {}

export type TransactionType = 'Income' | 'Expense' | 'Transfer';

export interface UseCreateTransactionProps {
  transactionCategory: TransactionType;
}

export interface InitValueFormik {
  amount: string;
  description: string;
  attachments: AttachmentImage[] | null;
  category?: string;
  wallet?: string;
  repeatMode?: boolean;
  // Transfer transaction
  fromWallet?: string;
  toWallet?: string;
}

export type InfoTransaction = InitValueFormik & {
  type: TransactionType;
};

export type AttachmentImage = {
  title: string | undefined;
  imageType?: string;
  uri: string | undefined;
};
