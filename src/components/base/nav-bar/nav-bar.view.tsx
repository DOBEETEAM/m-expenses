import React, {useMemo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
// @packages
import {useNavigation} from '@react-navigation/native';
// @types
import {NavBarProps} from './nav-bar.type';
import {TypographyType} from '@resources/theme';
import {ViewStyle} from '@data/models';
import { BundleIconSetName } from '../icon';
// @configs
import {appConfig} from '@app/app.config';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {NavBarWrapper} from '@components/base';
import {Typography} from '../typography';
import {Container} from '../container';
import { IconButton } from '../button';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  leftContainer: {
    marginRight: 'auto',
  },
  titleWrapper: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    justifyContent: 'center',
  },
  titleContainer: {
    maxWidth: '70%',
  },
  rightContainer: {
    marginLeft: 'auto',
  },
  backIcon: {
    fontSize: appConfig.device.isAndroid ? 24 : 32,
  },
  noBackground: {
    backgroundColor: 'transparent',
  },
});

const _NavBar: React.FC<NavBarProps> = ({
  noBackground = false,
  back = true,
  primary = true,

  title = '',

  onBack,

  renderLeft = undefined,
  renderRight = undefined,
  renderTitle = undefined,

  renderHeader = undefined,
  renderBack = undefined,
  ...props
}) => {
  const {theme} = useTheme();
  const navigation = useNavigation();

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: primary ? theme.color.primary : theme.color.surface,
    };
  }, [theme, primary]);

  const textStyle = useMemo(() => {
    return {
      color: primary ? theme.color.onPrimary : theme.color.onSurface,
    };
  }, [theme, primary]);

  const backStyle = useMemo(() => {
    return [styles.backIcon, textStyle];
  }, [textStyle]);

  const handleBack = useCallback(() => {
    onBack ? onBack() : navigation.goBack();
  }, [onBack, navigation]);

  const renderBaseBack = () => {
    return (
      <IconButton
        bundle={BundleIconSetName.IONICONS}
        name={appConfig.device.isAndroid ? 'arrow-back' : 'ios-chevron-back'}
        iconStyle={backStyle}
        onPress={handleBack}
      />
    );
  };

  const renderBaseTitle = useCallback(() => {
    return (
      <Typography type={TypographyType.TITLE_MEDIUM} style={textStyle}>
        {title}
      </Typography>
    );
  }, [title, textStyle]);

  const containerStyle: ViewStyle = useMemo(() => {
    return [
      backgroundStyle,
      styles.container,
      noBackground && styles.noBackground,
      props.containerStyle,
    ];
  }, [backgroundStyle, noBackground, props.containerStyle]);

  return (
    <NavBarWrapper {...props} containerStyle={containerStyle}>
      {renderHeader ? (
        renderHeader()
      ) : (
        <Container noBackground flex row centerVertical>
          <Container noBackground row style={styles.leftContainer}>
            {back && (renderBack ? renderBack(backStyle) : renderBaseBack())}
            {renderLeft && renderLeft()}
          </Container>

          <Container noBackground center flex style={styles.titleWrapper}>
            <Container row noBackground style={styles.titleContainer}>
              {renderTitle ? renderTitle() : renderBaseTitle()}
            </Container>
          </Container>

          <View style={styles.rightContainer}>
            {renderRight && renderRight()}
          </View>
        </Container>
      )}
    </NavBarWrapper>
  );
};

export const NavBar = React.memo(_NavBar);
