import React, {useCallback} from 'react';
import {Image} from 'react-native';
// @packages
import Carousel from 'react-native-reanimated-carousel';
// @types
import {AppIntroProps, SlideData} from './app-intro.type';
import {TypographyType} from '@resources/theme';
// @configs
import {appConfig} from '@app';
// @hooks
import {useTheme} from '@shared/hooks';
// @styles
import {styles} from './app-intro.style';
// @components
import {Button, Container, ScreenWrapper, Typography} from '@components/base';

const slideDatas: SlideData[] = [
  {
    key: 'slide-1',
    title: 'Gain total control of your money',
    description: 'Become your own money manager and make every cent count',
    image: require('@assets/images/slide1.png'),
  },
  {
    key: 'slide-2',
    title: 'Know where your money goes',
    description:
      'Track your transaction easily, with categories and financial report',
    image: require('@assets/images/slide2.png'),
  },
  {
    key: 'slide-3',
    title: 'Planning Ahead',
    description: 'Setup your budget for each category so you in control',
    image: require('@assets/images/slide3.png'),
  },
];

const _AppIntro: React.FC<AppIntroProps> = () => {
  const {theme} = useTheme();

  const renderItem = useCallback(
    ({item, index}: {item: SlideData; index: number}) => {
      return (
        <Container
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.surface,
          }}>
          <Container style={{width: 310, height: 310}}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%'}}
            />
          </Container>

          <Typography type={TypographyType.TITLE_HUGE} style={{fontWeight: '700', marginBottom: 20}}>{item.title}</Typography>
          <Typography type={TypographyType.DESCRIPTION_MEDIUM}>
            {item.description}
          </Typography>
        </Container>
      );
    },
    [theme],
  );

  return (
    <ScreenWrapper safeTopLayout style={{backgroundColor: theme.color.surface}} >
      <Carousel
        data={slideDatas}
        width={appConfig.device.width}
        height={appConfig.device.height / 1.4}
        renderItem={renderItem}
      />

      <Button title={'Next'} />
    </ScreenWrapper>
  );
};

export const AppIntro = React.memo(_AppIntro);
