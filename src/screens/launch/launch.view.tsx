import React from 'react';
import {Image} from 'react-native';
// @types
import {LaunchProps} from './launch.type';
// @hooks
import {useTheme} from '@shared/hooks';
import {useLaunchModel} from './launch.hook';
// @components
import {ActivityIndicator, Container} from '@components/base';

// @styles
import {styles} from './launch.style';

const _Launch: React.FC<LaunchProps> = ({navigation}) => {
  const {theme} = useTheme();
  useLaunchModel({navigation});

  return (
    <Container flex center>
      <Container noBackground style={styles.logoContainer}>
        <Image
          source={require('@assets/logo/icon-android-foreground.png')}
          style={styles.imageContainer}
          resizeMode="contain"
        />
      </Container>

      <ActivityIndicator color={theme.color.primary} size={'large'} />
    </Container>
  );
};

export const Launch = React.memo(_Launch);
