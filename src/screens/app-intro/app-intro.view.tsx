import React, {useCallback, useMemo} from 'react';
import {Image} from 'react-native';
// @packages
import Carousel from 'react-native-reanimated-carousel';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
// @types
import {AppIntroProps, SlideData} from './app-intro.type';
import {TypographyType} from '@resources/theme';
import {ButtonRoundedType} from '@components/base';
// @configs
import {appConfig} from '@app';
// @hooks
import {useTheme} from '@shared/hooks';
import {useAppIntro, useAppIntroStyle} from './app-intro.hook';
// @styles
import {styles} from './app-intro.style';
// @components
import {
  Container,
  FilledButton,
  ScreenWrapper,
  Typography,
} from '@components/base';

const slideData: SlideData[] = [
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

const _AppIntro: React.FC<AppIntroProps> = ({navigation}) => {
  const {theme} = useTheme();
  const {
    slideIndex,
    handleIndexSwipeSlide,
    handleNavigateSignIn,
    handleNavigateSignUp,
  } = useAppIntro({navigation});
  const {containerStyle, containerSlidesStyle} = useAppIntroStyle();

  const activeIndicatorConfig = useMemo(
    () => ({
      color: theme.color.primary as string,
      margin: 2,
      opacity: 1,
      size: 8,
    }),
    [theme],
  );

  const inactiveIndicatorConfig = useMemo(() => {
    return {
      color: theme.color.placeholder as string,
      margin: 3,
      opacity: 0.5,
      size: 6,
    };
  }, [theme]);

  const renderItem = useCallback(
    ({item, index}: {item: SlideData; index: number}) => {
      return (
        <Container style={[styles.containerSlides, containerSlidesStyle]}>
          <Container style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </Container>

          <Typography
            type={TypographyType.TITLE_HUGE}
            style={styles.titleStyle}>
            {item.title}
          </Typography>
          <Typography
            type={TypographyType.DESCRIPTION_MEDIUM}
            style={styles.descriptionStyle}>
            {item.description}
          </Typography>
        </Container>
      );
    },
    [theme],
  );

  return (
    <ScreenWrapper safeTopLayout style={[styles.container, containerStyle]}>
      <Carousel
        data={slideData}
        width={appConfig.device.width}
        height={appConfig.device.height / 1.6}
        renderItem={renderItem}
        onSnapToItem={handleIndexSwipeSlide}
        autoPlay
        autoPlayInterval={2000}
      />

      <Container flex centerHorizontal noBackground>
        <AnimatedDotsCarousel
          length={slideData.length}
          maxIndicators={4}
          currentIndex={slideIndex}
          interpolateOpacityAndColor={true}
          activeIndicatorConfig={activeIndicatorConfig}
          inactiveIndicatorConfig={inactiveIndicatorConfig}
          decreasingDots={[
            {
              config: {
                color: theme.color.surface as string,
                margin: 3,
                opacity: 0.5,
                size: 6,
              },
              quantity: 1,
            },
            {
              config: {
                color: theme.color.surface as string,
                margin: 3,
                opacity: 0.5,
                size: 4,
              },
              quantity: 1,
            },
          ]}
        />
      </Container>

      <Container style={styles.containerButton}>
        <FilledButton
          onPress={handleNavigateSignUp}
          renderTitleComponent={() => (
            <Typography type={TypographyType.TITLE_SEMI_LARGE} onPrimary>
              Sign Up
            </Typography>
          )}
          primary
          rounded={ButtonRoundedType.MEDIUM}
          style={styles.signUpButton}
        />

        <FilledButton
          onPress={handleNavigateSignIn}
          renderTitleComponent={() => (
            <Typography type={TypographyType.TITLE_SEMI_LARGE} onPrimary>
              Sign In
            </Typography>
          )}
          primary
          rounded={ButtonRoundedType.MEDIUM}
          style={styles.signInButton}
        />
      </Container>
    </ScreenWrapper>
  );
};

export const AppIntro = React.memo(_AppIntro);
