export interface TransactionItemProps {
  description?: string;
  title: string;
  amount: string;
  timeTransaction: string;
  type: 'Income' | 'Expense';
}
