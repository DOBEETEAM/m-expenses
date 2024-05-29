export type AppStackParamList = {
  Launch: undefined;
  AppIntro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  BottomTab: undefined;
  CreateTransaction: {
    transactionCategory: 'Income' | 'Expense' | 'Transfer';
  };
  Notification: undefined;
};
