import React, {forwardRef, useMemo} from 'react';
import {StyleSheet} from 'react-native';
// @packages
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
// @types
import {ScreenWrapperProps} from './screen-wrapper.type';
import {Ref} from '../base.type';
import {Theme} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {Container} from '../container';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.color.background,
    },
    noBackground: {
      backgroundColor: undefined,
    },
    contentContainer: {
      flex: 1,
    },
  });

  return styles;
};

const _ScreenWrapper: React.FC<ScreenWrapperProps> = forwardRef(
  (
    {
      children,
      headerComponent = null,

      noBackground,
      safeLayout,
      safeTopLayout,
      style,

      ...props
    },
    ref: Ref,
  ) => {
    const {theme} = useTheme();

    const styles = useMemo(() => {
      const baseStyles = createStyles(theme);

      return {
        container: [
          baseStyles.container,
          noBackground && baseStyles.noBackground,
          style,
        ],
        contentContainer: baseStyles.contentContainer,
      };
    }, [theme, style, noBackground]);

    const edges: Array<Edge> = useMemo(() => {
      const directions: Array<Edge> = ['left', 'right'];
      if (safeLayout) {
        directions.push('bottom');
      }
      if (safeTopLayout) {
        directions.push('top');
      }
      return directions;
    }, [safeLayout, safeTopLayout]);

    return (
      <Container {...props} ref={ref} style={styles.container}>
        {!!headerComponent && headerComponent}
        <SafeAreaView edges={edges} style={styles.contentContainer}>
          {children}
        </SafeAreaView>
      </Container>
    );
  },
);

export const ScreenWrapper = React.memo(_ScreenWrapper);
