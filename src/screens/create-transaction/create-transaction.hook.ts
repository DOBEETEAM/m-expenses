import {useCallback, useMemo} from 'react';
import {useFormik} from 'formik';
import type {
  UseCreateTransactionProps,
  InitValueFormik,
  InfoTransaction,
} from './create-transaction.type';
import {Colors} from '@resources/values';
import {useTheme} from '@shared/hooks';

export function useCreateTransaction({
  transactionCategory,
}: UseCreateTransactionProps) {
  const {values, handleChange, setFieldValue, handleSubmit} =
    useFormik<InitValueFormik>({
      initialValues:
        transactionCategory === 'Transfer'
          ? {
              amount: '',
              description: '',
              fromWallet: '',
              toWallet: '',
              attachments: '',
            }
          : {
              amount: '',
              category: '',
              description: '',
              wallet: '',
              repeatMode: false,
              attachments: '',
            },
      onSubmit: (value, {resetForm}) => {
        const infoTransaction: InfoTransaction = {
          ...value,
          type: transactionCategory,
        };
        console.log(infoTransaction);

        resetForm();
      },
    });

  const handleContinue = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  const handleChangeCategory = useCallback(
    (item: {label: string; value: string}) => {
      setFieldValue('category', item.value);
    },
    [setFieldValue],
  );

  const handleChangeWallet = useCallback(
    (item: {label: string; value: string}) => {
      setFieldValue('wallet', item.value);
    },
    [setFieldValue],
  );

  const handleRepeatMode = useCallback(
    (value: boolean) => {
      setFieldValue('repeatMode', value);
    },
    [setFieldValue],
  );

  const handleChangeFromWallet = useCallback(
    (item: {label: string; value: string}) => {
      setFieldValue('fromWallet', item.value);
    },
    [setFieldValue],
  );

  const handleChangeToWallet = useCallback(
    (item: {label: string; value: string}) => {
      setFieldValue('toWallet', item.value);
    },
    [setFieldValue],
  );

  return {
    values,
    handleChange,
    setFieldValue,
    handleContinue,

    handleChangeCategory,
    handleChangeWallet,
    handleRepeatMode,

    handleChangeFromWallet,
    handleChangeToWallet,
  };
}

export function useCreateTransactionStyle({
  transactionCategory,
}: UseCreateTransactionProps) {
  const {theme} = useTheme();

  const containerBoxStyle = useMemo(() => {
    return {
      borderTopLeftRadius: theme.layout.borderRadiusHuge,
      borderTopRightRadius: theme.layout.borderRadiusHuge,
    };
  }, [theme]);

  const dropDownContainer = useMemo(
    () => ({
      borderWidth: theme.layout.borderWidthSmall,
      borderRadius: theme.layout.borderRadiusHuge,
      borderColor: theme.color.disabled,
    }),
    [theme],
  );

  const iconTransferContainerStyle = useMemo(
    () => ({
      borderWidth: theme.layout.borderWidthSmall,
      borderRadius: theme.layout.borderRadiusGigantic,
      borderColor: theme.color.disabled,
    }),
    [theme],
  );

  const navBarStyle = useMemo(() => {
    if (transactionCategory === 'Expense') {
      return {
        backgroundColor: Colors.EXPENSE,
      };
    } else if (transactionCategory === 'Income') {
      return {
        backgroundColor: Colors.INCOME,
      };
    } else {
      return {
        backgroundColor: Colors.TRANSFER,
      };
    }
  }, [transactionCategory]);

  return {
    navBarStyle,
    containerBoxStyle,
    dropDownContainer,
    iconTransferContainerStyle,
  };
}
