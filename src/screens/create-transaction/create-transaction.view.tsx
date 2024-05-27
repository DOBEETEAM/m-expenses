import React from 'react';
import {Keyboard, View, TouchableWithoutFeedback, Switch} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// @types
import {CreateTransactionProps} from './create-transaction.type';
// @hooks
import {
  useCreateTransaction,
  useCreateTransactionStyle,
} from './create-transaction.hook';
// @components
import {
  AppInput,
  BundleIconSetName,
  Button,
  ButtonRoundedType,
  Container,
  FilledButton,
  Icon,
  NavBar,
  Typography,
} from '@components/base';
// @styles
import {styles} from './create-transaction.style';
import {TypographyType} from '@resources/theme';
import {useTheme} from '@shared/hooks';

const EXPENSE_DATA = [
  {label: 'Shopping', value: 'shopping'},
  {label: 'Cafe', value: 'cafe'},
  {label: 'Fuel & travel', value: 'fuel,travel'},
  {label: 'Market', value: 'market'},
];

const WALLET_DATA = [
  {label: 'Cash', value: 'cash'},
  {label: 'Bank', value: 'bank'},
  {label: 'E-wallet', value: 'ewallet'},
];

const _CreateTransaction: React.FC<CreateTransactionProps> = ({
  navigation,
  route,
}) => {
  const {theme} = useTheme();
  const {transactionCategory} = route.params;
  const {
    values,
    handleChange,
    handleChangeCategory,
    handleChangeWallet,
    handleRepeatMode,
    handleContinue,
  } = useCreateTransaction();
  const {navBarStyle, containerBoxStyle, dropDownContainer} =
    useCreateTransactionStyle({
      transactionCategory,
    });

  return (
    <Container flex style={[navBarStyle]}>
      <NavBar back title={transactionCategory} containerStyle={[navBarStyle]} />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <Container noBackground style={{marginHorizontal: 25, marginTop: 50}}>
            <Typography type={TypographyType.TITLE_SEMI_LARGE_TERTIARY}>
              How much?
            </Typography>

            <AppInput
              placeholder="0"
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                marginLeft: -10,
              }}
              style={{
                color: theme.color.white,
                fontSize: 38,
              }}
              numberOfLines={1}
              value={values.amount}
              onChangeText={handleChange('amount')}
            />
          </Container>

          <Container flex style={[containerBoxStyle]}>
            <View style={styles.contentBox}>
              <Dropdown
                style={[styles.dropdown, dropDownContainer]}
                placeholderStyle={[
                  styles.placeholderStyle,
                  {color: theme.color.placeholder},
                ]}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={EXPENSE_DATA}
                labelField="label"
                valueField="value"
                placeholder="Category"
                closeModalWhenSelectedItem={true}
                value={values.category}
                onChange={handleChangeCategory}
              />

              <AppInput
                placeholder="Description"
                containerStyle={{
                  height: 56,
                  marginBottom: 16,
                }}
                value={values.description}
                onChangeText={handleChange('description')}
              />

              <Dropdown
                style={[styles.dropdown, dropDownContainer]}
                placeholderStyle={[
                  styles.placeholderStyle,
                  {color: theme.color.placeholder},
                ]}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={WALLET_DATA}
                labelField="label"
                valueField="value"
                placeholder="Wallet"
                closeModalWhenSelectedItem={true}
                value={values.wallet}
                onChange={handleChangeWallet}
              />

              <Button
                renderIconLeft={(titleStyles) => (
                  <Icon
                    bundle={BundleIconSetName.ENTYPO}
                    name="attachment"
                    style={[titleStyles as any, {fontSize: 20, marginRight: 5}]}
                  />
                )}
                title={'Add attachment'}
                typoProps={{
                  type: TypographyType.CAPTION,
                }}
                titleStyle={{
                  color: theme.color.placeholder,
                }}
                style={[dropDownContainer, styles.buttonAddAttachment]}
              />

              <View style={styles.sectionRepeat}>
                <View>
                  <Typography type={TypographyType.LABEL_LARGE}>
                    Repeat
                  </Typography>
                  <Typography
                    type={TypographyType.LABEL_SEMI_MEDIUM_TERTIARY}
                    style={{color: theme.color.placeholder}}>
                    Repeat Transaction
                  </Typography>
                </View>

                <Switch
                  value={values.repeatMode}
                  thumbColor={
                    values.repeatMode
                      ? (theme.color.primary as string)
                      : theme.color.disabled
                  }
                  trackColor={{
                    true: theme.color.primary20 as string,
                  }}
                  onValueChange={handleRepeatMode}
                />
              </View>
            </View>

            <FilledButton
              onPress={handleContinue}
              primary
              rounded={ButtonRoundedType.MEDIUM}
              title={'Continue'}
              style={styles.buttonContainer}
              typoProps={{
                type: TypographyType.BUTTON_TEXT,
              }}
            />
          </Container>
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export const CreateTransaction = React.memo(_CreateTransaction);
