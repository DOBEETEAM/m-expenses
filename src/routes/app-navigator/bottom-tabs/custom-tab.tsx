import React, {useMemo, memo} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// @packages
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// @hooks
import {useTheme} from '@shared';

import {Colors} from '@resources';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 5,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: '100%',
    height: 2,
    position: 'absolute',
    top: 0,
  },
  indicatorActive: {},
  labelActive: {},
  labelInactive: {},
  icon: {
    fontSize: 24,
    height: 2,
  },
  label: {
    fontSize: 10,
    marginTop: 3,
  },
});

const _CustomTab = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();
  const {theme} = useTheme();

  const wrapperStyle = useMemo(() => {
    return [
      {
        backgroundColor: theme.color.background,
      },
    ];
  }, [theme]);

  const containerStyle = useMemo(() => {
    return [
      styles.container,
      {
        height: 58 + bottom,
        paddingBottom: bottom,
        backgroundColor: theme.color.surface,
      },
    ];
  }, [bottom, theme]);

  const labelInactiveStyle = useMemo(() => {
    return [
      styles.labelInactive,
      {
        color: theme.color.textSecondary,
      },
    ];
  }, [theme]);

  const labelActiveStyle = useMemo(() => {
    return [
      styles.labelActive,
      {
        color: theme.color.primaryHighlight,
      },
    ];
  }, [theme]);

  return (
    <View style={wrapperStyle}>
      <View style={containerStyle}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const {options} = descriptors[route.key];

          const label =
            options.title !== undefined ? options.title : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({
                key: route.key,
                name: route.name,
                merge: true,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.btnContainer}>
              <>
                {options.tabBarButton
                  ? options.tabBarButton({children: null})
                  : null}
                {options?.tabBarIcon
                  ? options.tabBarIcon({
                      focused: isFocused,
                      color: isFocused
                        ? (theme.color.primaryHighlight as string)
                        : (theme.color.textSecondary as string),
                      size: 12,
                    })
                  : null}
                {options.tabBarLabel !== undefined ? (
                  options.tabBarLabel
                ) : (
                  <Text
                    style={[
                      labelInactiveStyle,
                      styles.label,
                      isFocused && labelActiveStyle,
                    ]}>
                    {label}
                  </Text>
                )}
              </>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export const CustomTab = memo(_CustomTab);
