import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {interpolate, useSharedValue} from 'react-native-reanimated';
// @types
import {AddButtonPlusProps} from './add-button-plus.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @constants
import {Colors} from '@resources/values';
// @components
import {Container, Icon} from '@components/base';
import FastImage from 'react-native-fast-image';
// @images
import CurrencyExchangeSvg from '@assets/icons/currency-exchange.svg';
import IncomeSvg from '@assets/icons/income.svg';
import ExpenseSvg from '@assets/icons/expense.svg';

const _AddButtonPlus: React.FC<AddButtonPlusProps> = () => {
  const {theme} = useTheme();
  const valueRotate = useSharedValue('45deg');

  const addButtonInnerStyle = useMemo(
    () => ({
      backgroundColor: theme.color.primaryHighlight,
      transform: [
        {
          // rotate: interpolate(0, [0, 1], ["0deg", "45deg"]),
          rotate: '45deg',
        },
      ],
    }),
    [theme],
  );

  const addButtonStyle = useMemo(
    () => ({
      ...theme.layout.shadow,
      ...styles.addButton,
      shadowColor: theme.color.shadow,
    }),
    [theme],
  );

  return (
    <Container flex style={styles.container}>
      <Container noBackground style={styles.box}>
        <TouchableWithoutFeedback style={addButtonStyle}>
          <Container
            reanimated
            style={[
              styles.item,
              {
                backgroundColor: Colors.INCOME,
                transform: [
                  {
                    translateX: -60,
                  },
                  {
                    translateY: -50,
                  },
                ],
              },
            ]}>
            <IncomeSvg fill="#fff" />
          </Container>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Container
            reanimated
            style={[
              styles.item,
              {
                backgroundColor: Colors.TRANSFER,
                transform: [
                  {
                    translateY: -100,
                  },
                ],
              },
            ]}>
            <CurrencyExchangeSvg fill="#fff" />
          </Container>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Container
            reanimated
            style={[
              styles.item,
              {
                backgroundColor: Colors.EXPENSE,
                transform: [
                  {
                    translateX: 60,
                  },
                  {
                    translateY: -50,
                  },
                ],
              },
            ]}>
            <ExpenseSvg fill="#fff" />
          </Container>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => console.log('click')}
          style={addButtonStyle}>
          <Container
            reanimated
            style={[styles.addButtonInner, addButtonInnerStyle]}>
            <Icon name="add" style={styles.itemIcon} />
          </Container>
        </TouchableWithoutFeedback>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 0,
  },
  box: {
    position: 'relative',
    width: 57,
    height: 57,
    top: -20,
  },
  addButton: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    fontSize: 35,
    color: Colors.WHITE,
  },
  itemImage: {
    width: 32,
    height: 32,
  },
});

export const AddButtonPlus = React.memo(_AddButtonPlus);
