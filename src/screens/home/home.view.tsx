import React, {useCallback} from 'react';
import {Image} from 'react-native';
// @packages
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
// @types
import {HomeProps} from './home.type';
import {TypographyType} from '@resources/theme';
// @hooks
import {useTheme} from '@shared/hooks';
import {useHomeStyle} from './home.hook';
// @components
import {
  BundleIconSetName,
  Button,
  Icon,
  NavBar,
  ScrollView,
  Typography,
  Container,
} from '@components/base';
import {IncomeExpenseCard} from '@components';
// @styles
import {styles} from './home.style';

const _Home: React.FC<HomeProps> = () => {
  const {t} = useTranslation(['theme']);
  const {theme} = useTheme();
  const {btnMonthStyle, linearContainerStyle} = useHomeStyle();

  const renderAvatarUser = useCallback(() => {
    return (
      <Button style={{marginLeft: 5, width: 32, height: 32}}>
        <Image
          source={require('@assets/images/05.png')}
          style={{width: '100%', height: '100%'}}
        />
      </Button>
    );
  }, []);

  const renderFilterMonth = useCallback(() => {
    return (
      <Button style={btnMonthStyle}>
        <Icon
          name="chevron-down"
          style={{color: theme.color.primary, marginRight: 5, fontSize: 15}}
        />
        <Typography type={TypographyType.LABEL_LARGE}>Tháng 2</Typography>
      </Button>
    );
  }, [theme]);

  const renderIconNotification = useCallback(() => {
    return (
      <Icon
        bundle={BundleIconSetName.MATERIAL_COMMUNITY_ICONS}
        name="bell"
        style={[styles.iconNotify, {color: theme.color.primary}]}
      />
    );
  }, [theme]);

  return (
    <ScrollView useGestureHandler>
      <LinearGradient
        colors={['#FFF6E5', '#F8EDD8']}
        style={[linearContainerStyle]}>
        <NavBar
          back={false}
          noBackground
          renderRight={renderIconNotification}
          renderTitle={renderFilterMonth}
          renderLeft={renderAvatarUser}
        />

        <Container noBackground center>
          <Typography type={TypographyType.LABEL_SEMI_MEDIUM_TERTIARY}>
            Account Balance
          </Typography>
          <Typography
            type={TypographyType.LABEL_GIGANTIC}
            style={{fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>
            20.000.000đ
          </Typography>
        </Container>

        <Container
          noBackground
          row
          style={{justifyContent: 'space-around', marginBottom: 25}}>
          <IncomeExpenseCard type={'Income'} />
          <IncomeExpenseCard type='Expense' />
        </Container>
      </LinearGradient>

      <Typography>Theme: {t(`${theme.id}`)}</Typography>
    </ScrollView>
  );
};

export const Home = React.memo(_Home);
