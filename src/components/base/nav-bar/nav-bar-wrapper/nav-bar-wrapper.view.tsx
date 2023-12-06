import React, {useMemo} from 'react';
import {Platform, StyleSheet, StatusBar} from 'react-native';
// @packages
import {SafeAreaView, Edge} from 'react-native-safe-area-context';
// @types
import {NavBarWrapperProps} from './nav-bar-wrapper.type';
// @components
import {Container} from '@components/base';

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
  },
  appNavBar: {
    ...Platform.select({
      ios: {
        height: 64,
      },
      default: {
        height: 54 + (StatusBar.currentHeight || 10),
      },
    }),
  },
  safeAreaContainer: {
    width: '100%',
  },
  fullLayout: {
    height: '100%',
  },
});

const _NavBarWrapper = ({
  children,
  appNavBar = true,

  containerStyle,
  
  ...props
}: NavBarWrapperProps) => {
  const edges: Array<Edge> = useMemo(() => {
    return ['top', 'left', 'right'];
  }, []);

  return (
    <Container
      {...props}
      style={[styles.container, appNavBar && styles.appNavBar, containerStyle]}>
      <SafeAreaView
        edges={edges}
        style={[styles.safeAreaContainer, appNavBar && styles.fullLayout]}>
        {children}
      </SafeAreaView>
    </Container>
  );
};

export const NavBarWrapper = React.memo(_NavBarWrapper);
