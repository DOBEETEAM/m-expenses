import React from 'react';
// @packages
import {useTranslation} from 'react-i18next';
// @types
import {HomeProps} from './home.type';
// @hooks
import {useTheme} from '@shared/hooks';
// @components
import {ScreenWrapper, Typography} from '@components/base';
// @styles
import {styles} from './home.style';

const _Home: React.FC<HomeProps> = () => {
  const {t} = useTranslation(['theme']);
  const {theme} = useTheme();

  return (
    <ScreenWrapper safeTopLayout noBackground>
      <Typography>Theme: {t(`${theme.id}`)}</Typography>
    </ScreenWrapper>
  );
};

export const Home = React.memo(_Home);
