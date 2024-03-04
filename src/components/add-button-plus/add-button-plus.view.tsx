import React, {useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @packages
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  Easing,
  ReduceMotion,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
// @types
import {AddButtonPlusProps} from './add-button-plus.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @constants
import {Colors} from '@resources/values';
// @components
import {Container, Icon} from '@components/base';
// @images
import CurrencyExchangeSvg from '@assets/icons/currency-exchange.svg';
import IncomeSvg from '@assets/icons/income.svg';
import ExpenseSvg from '@assets/icons/expense.svg';

const _AddButtonPlus: React.FC<AddButtonPlusProps> = ({opened, toggleOpen}) => {
  const {theme} = useTheme();
  const valueRotate = useSharedValue('0deg');
  const actionsOffset = useSharedValue(0);
  const opacityAction = useSharedValue(0);

  useEffect(() => {
    valueRotate.value = withTiming(opened ? '45deg' : '0deg', {
      duration: 200,
      easing: Easing.inOut(Easing.linear),
      reduceMotion: ReduceMotion.System,
    });

    withSequence(
      (actionsOffset.value = withTiming(opened ? 0 : 1, {
        duration: 300,
        easing: Easing.inOut(Easing.linear),
      })),
      (opacityAction.value = withTiming(opened ? 1 : 0, {
        duration: 300,
        easing: Easing.linear,
      })),
    );

    return () => {
      cancelAnimation(valueRotate);
      cancelAnimation(actionsOffset);
      cancelAnimation(opacityAction);
    };
  }, [opened, valueRotate, actionsOffset, opacityAction]);

  const actionOpacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacityAction.value,
  }));

  const addButtonInnerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: valueRotate.value,
      },
    ],
  }));

  const addButtonInnerStyle = useMemo(
    () => ({
      backgroundColor: theme.color.primaryHighlight,
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
              actionOpacityAnimatedStyle,
              {
                backgroundColor: Colors.INCOME,
                transform: [
                  {
                    translateX: interpolate(
                      actionsOffset.value,
                      [0, 1],
                      [0, -60],
                    ),
                  },
                  {
                    translateY: interpolate(
                      actionsOffset.value,
                      [0, 1],
                      [0, -50],
                    ),
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
              actionOpacityAnimatedStyle,
              {
                backgroundColor: Colors.TRANSFER,
                transform: [
                  {
                    translateY: interpolate(
                      actionsOffset.value,
                      [0, 1],
                      [0, -100],
                    ),
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
              actionOpacityAnimatedStyle,
              {
                backgroundColor: Colors.EXPENSE,
                transform: [
                  {
                    translateX: interpolate(
                      actionsOffset.value,
                      [0, 1],
                      [0, 60],
                    ),
                  },
                  {
                    translateY: interpolate(
                      actionsOffset.value,
                      [0, 1],
                      [0, -50],
                    ),
                  },
                ],
              },
            ]}>
            <ExpenseSvg fill="#fff" />
          </Container>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={toggleOpen} style={addButtonStyle}>
          <Container
            reanimated
            style={[
              styles.addButtonInner,
              addButtonInnerStyle,
              addButtonInnerAnimatedStyle,
            ]}>
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
});

export const AddButtonPlus = React.memo(_AddButtonPlus);
