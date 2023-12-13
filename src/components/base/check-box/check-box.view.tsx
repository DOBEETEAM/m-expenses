import React, {useMemo} from 'react';
// @packages
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNCheckBox from '@react-native-community/checkbox';
// @types
import {CheckBoxProps} from './check-box.type';
import {Ref} from '../base.type';
// @hooks
import {useTheme} from '@shared/hooks';

const _CheckBox = React.forwardRef(
  (
    {
      value,
      disabled,
      onPress,
      onValueChange,
      style,
      containerStyle,

      ...props
    }: CheckBoxProps,
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const tintColors = useMemo(
      () => ({
        true: theme.color.primary,
        false: theme.color.placeholder,
      }),
      [theme],
    );

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={containerStyle}>
        <RNCheckBox
          {...props}
          ref={ref}
          value={value}
          disabled={disabled}
          tintColors={tintColors}
          style={style}
          onValueChange={onValueChange}
        />
      </TouchableOpacity>
    );
  },
);

export const CheckBox = React.memo(_CheckBox);
