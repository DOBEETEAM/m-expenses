import {useTheme} from '@shared/hooks';
import {
  InitValueFormik,
  UseCreateTransactionProps,
} from './create-transaction.type';
import {useCallback, useMemo} from 'react';
import {Colors} from '@resources/values';
import {useFormik} from 'formik';

export function useCreateTransaction() {
  const {values, handleChange, setFieldValue, handleSubmit} =
    useFormik<InitValueFormik>({
      initialValues: {
        amount: '',
        category: '',
        description: '',
        wallet: '',
        repeatMode: false,
        attachments: '',
      },
      onSubmit: (value, {resetForm}) => {
        console.log(value);

        resetForm()
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

  return {
    values,
    handleChange,
    setFieldValue,
    handleContinue,

    handleChangeCategory,
    handleChangeWallet,
    handleRepeatMode,
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

  return {navBarStyle, containerBoxStyle, dropDownContainer};
}
