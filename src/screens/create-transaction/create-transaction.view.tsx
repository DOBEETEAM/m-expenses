import React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
// @types
import {CreateTransactionProps} from './create-transaction.type';

import {useCreateTransactionStyle} from './create-transaction.hook';
// @components
import {AppInput, Container, NavBar, Typography} from '@components/base';
// @styles
import {styles} from './create-transaction.style';
import {TypographyType} from '@resources/theme';
import {useTheme} from '@shared/hooks';

const _CreateTransaction: React.FC<CreateTransactionProps> = ({
  navigation,
  route,
}) => {
  const {theme} = useTheme();
  const {transactionCategory} = route.params;
  const {navBarStyle} = useCreateTransactionStyle({transactionCategory});

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
            />
          </Container>

          <Container
            flex
            style={{
              borderTopLeftRadius: theme.layout.borderRadiusHuge,
              borderTopRightRadius: theme.layout.borderRadiusHuge,
            }}>
            <View style={{marginVertical: 24, marginHorizontal: 16}}>
              <Dropdown
              // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              // placeholderStyle={styles.placeholderStyle}
              // selectedTextStyle={styles.selectedTextStyle}
              // inputSearchStyle={styles.inputSearchStyle}
              // iconStyle={styles.iconStyle}
              // data={data}
              // search
              // maxHeight={300}
              labelField=""
              valueField=""
              placeholder={"Category"}
              searchPlaceholder="Search..."
              // value={value}
              // onFocus={() => setIsFocus(true)}
              // onBlur={() => setIsFocus(false)}
              // onChange={item => {
              //   setValue(item.value);
              //   setIsFocus(false);
              // }}
              />

              <AppInput
                placeholder="description"
                containerStyle={{
                  backgroundColor: 'transparent',
                }}
                // onChangeText={form.onChangeText}
                // value={form.value}
              />
            </View>
          </Container>
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export const CreateTransaction = React.memo(_CreateTransaction);
