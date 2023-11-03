import React from 'react';
// @types
import {LaunchProps} from './launch.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';
import {useLaunchModel} from './launch.hook';
// @components
import {ActivityIndicator, Container, Typography} from '@components/base';
// @styles
import {styles} from './launch.style';

const _Launch: React.FC<LaunchProps> = ({navigation}) => {
  const {theme} = useTheme();
  useLaunchModel({navigation});

  return (
    <Container flex center>
      <Typography type={TypographyType.TITLE_HUGE} style={styles.logoContainer}>
        Expenses Tracker
      </Typography>
      <ActivityIndicator color={theme.color.primary} size={'large'} />
    </Container>
  );
};

export const Launch = React.memo(_Launch);
