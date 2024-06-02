import React, {useCallback} from 'react';
import {Keyboard, View, TouchableWithoutFeedback, Switch} from 'react-native';
// @packages
import {Dropdown} from 'react-native-element-dropdown';
// @types
import {CreateTransactionProps} from './create-transaction.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {
  useCreateTransaction,
  useCreateTransactionStyle,
} from './create-transaction.hook';
import {useTheme, useToggle} from '@shared/hooks';
// @constants
import {
  BundleIconSetName,
  ButtonRoundedType,
  ScrollView,
} from '@components/base';
// @components
import {
  AppInput,
  Button,
  Container,
  FilledButton,
  Icon,
  NavBar,
  ScreenWrapper,
  Typography,
} from '@components/base';
import {ImagesList, ModalMediaPicker} from '@components';
// @styles
import {styles} from './create-transaction.style';
// @images
import TransferIcon from '@assets/icons/transaction.svg';

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
  const {isVisible, onShowVisible, onHideVisible} = useToggle();
  const {
    values,
    handleChange,
    handleChangeCategory,
    handleChangeWallet,
    handleRepeatMode,
    handleChangeFromWallet,
    handleChangeToWallet,
    handleContinue,
    handleChangeAttachment,
  } = useCreateTransaction({transactionCategory});
  const {
    navBarStyle,
    containerBoxStyle,
    dropDownContainer,
    iconTransferContainerStyle,
  } = useCreateTransactionStyle({
    transactionCategory,
  });

  const renderAttachments = useCallback(() => {
    if (values.attachments !== null) {
      return (
        <ImagesList data={values.attachments} nestedScrollEnabled={true} />
      );
    }
  }, [values.attachments]);

  const renderFormTransfer = useCallback(() => {
    return (
      <View style={styles.contentBox}>
        <Container noBackground row center>
          <Dropdown
            style={[styles.dropdownTransfer, dropDownContainer]}
            placeholderStyle={[
              styles.placeholderStyle,
              {color: theme.color.placeholder},
            ]}
            selectedTextStyle={styles.selectedTextStyle}
            data={WALLET_DATA}
            labelField="label"
            valueField="value"
            placeholder="From"
            closeModalWhenSelectedItem={true}
            value={values?.fromWallet}
            onChange={handleChangeFromWallet}
          />

          <View
            style={[styles.iconTransferContainer, iconTransferContainerStyle]}>
            <TransferIcon />
          </View>

          <Dropdown
            style={[styles.dropdownTransfer, dropDownContainer]}
            placeholderStyle={[
              styles.placeholderStyle,
              {color: theme.color.placeholder},
            ]}
            selectedTextStyle={styles.selectedTextStyle}
            data={WALLET_DATA}
            labelField="label"
            valueField="value"
            placeholder="To"
            closeModalWhenSelectedItem={true}
            value={values?.toWallet}
            onChange={handleChangeToWallet}
          />
        </Container>

        <AppInput
          placeholder="Description"
          containerStyle={{
            height: 56,
            marginBottom: 16,
          }}
          value={values.description}
          onChangeText={handleChange('description')}
        />

        <Button
          onPress={onShowVisible}
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
        {values.attachments && renderAttachments()}
      </View>
    );
  }, [
    theme,
    values,
    dropDownContainer,
    iconTransferContainerStyle,
    handleChange,
    onShowVisible,
    handleChangeFromWallet,
    handleChangeToWallet,
    renderAttachments,
  ]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <ScreenWrapper
          noBackground
          style={[navBarStyle]}
          headerComponent={
            <NavBar
              back
              title={transactionCategory}
              containerStyle={[navBarStyle, {paddingHorizontal: 15}]}
            />
          }>
          <ScrollView noBackground useGestureHandler>
            <Container
              noBackground
              style={[{paddingHorizontal: 25, paddingTop: 50}]}>
              <Typography type={TypographyType.TITLE_SEMI_LARGE_TERTIARY}>
                How much?
              </Typography>

              <AppInput
                keyboardType="numeric"
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
              {transactionCategory === 'Transfer' ? (
                renderFormTransfer()
              ) : (
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
                    value={values?.category}
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
                    onPress={onShowVisible}
                    renderIconLeft={(titleStyles) => (
                      <Icon
                        bundle={BundleIconSetName.ENTYPO}
                        name="attachment"
                        style={[titleStyles as any, styles.iconAddAttachment]}
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
                  {values.attachments && renderAttachments()}

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
              )}
            </Container>

            <Container>
              <FilledButton
                onPress={handleContinue}
                primary
                rounded={ButtonRoundedType.MEDIUM}
                title={'Continue'}
                style={[styles.buttonContainer]}
                typoProps={{
                  type: TypographyType.BUTTON_TEXT,
                }}
              />
            </Container>
          </ScrollView>
        </ScreenWrapper>

        <ModalMediaPicker
          isVisible={isVisible}
          onClose={onHideVisible}
          onPhotoSelected={handleChangeAttachment}
        />
      </>
    </TouchableWithoutFeedback>
  );
};

export const CreateTransaction = React.memo(_CreateTransaction);
