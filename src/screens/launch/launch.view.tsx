import React from 'react';
import {Image} from 'react-native';
// @types
import {LaunchProps} from './launch.type';
// @hooks
import {useTheme} from '@shared/hooks';
import {useLaunchModel, useLaunchStyle} from './launch.hook';
// @components
import {ActivityIndicator, Container, ScreenWrapper} from '@components/base';
// @styles
import {styles} from './launch.style';

const _Launch: React.FC<LaunchProps> = ({navigation}) => {
  const {theme} = useTheme();
  useLaunchModel({navigation});
  const {screenContainerStyle} = useLaunchStyle();

  return (
    <ScreenWrapper safeTopLayout style={[styles.screenContainer, screenContainerStyle]}>
      <Container noBackground style={styles.logoContainer}>
        <Image
          source={require('@assets/logo/icon-android-foreground.png')}
          style={styles.imageContainer}
        />
      </Container>

      <ActivityIndicator color={theme.color.primary} size={'large'} />
    </ScreenWrapper>
  );
};

export const Launch = React.memo(_Launch);
