import React, {forwardRef, memo, useMemo} from 'react';
import {StyleSheet, ScrollView as RNScrollView, Animated} from 'react-native';
// @packages
import Reanimated from 'react-native-reanimated';
import {ScrollView as RNGHScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// @types
import {ScrollViewProps} from './scroll-view.type';
import {Ref} from '../base.type';

const createStyles = () => {
  return StyleSheet.create({
    contentContainer: {flexGrow: 1},
  });
};

const _ScrollView = forwardRef(
  (
    {
      safeLayout,
      safeTopLayout,
      reanimated,
      animated,
      useGestureHandler,
      contentContainerStyle,
      children,
      ...props
    }: ScrollViewProps,
    ref: Ref,
  ) => {
    const {top, bottom} = useSafeAreaInsets();

    const contentContainerStyles = useMemo(() => {
      const baseStyles = createStyles();

      return [
        baseStyles.contentContainer,
        safeLayout && {paddingBottom: bottom},
        safeTopLayout && {paddingTop: top},
        contentContainerStyle,
      ];
    }, [bottom, top, safeLayout, safeTopLayout, contentContainerStyle]);

    const Wrapper: React.ElementType = useMemo(
      () =>
        reanimated
          ? useGestureHandler
            ? Reanimated.createAnimatedComponent(RNGHScrollView)
            : Reanimated.ScrollView
          : animated
          ? useGestureHandler
            ? Animated.createAnimatedComponent(RNGHScrollView)
            : Animated.ScrollView
          : useGestureHandler
          ? RNGHScrollView
          : RNScrollView,
      [reanimated, animated, useGestureHandler],
    );

    return (
      <Wrapper
        scrollIndicatorInsets={{right: 0.01}}
        {...props}
        ref={ref}
        contentContainerStyle={contentContainerStyles}>
        {children}
      </Wrapper>
    );
  },
);

export const ScrollView = memo(_ScrollView);
