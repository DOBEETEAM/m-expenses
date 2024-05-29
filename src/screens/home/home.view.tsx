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
import {useHome, useHomeStyle} from './home.hook';
// @components
import {
  BundleIconSetName,
  Button,
  Icon,
  NavBar,
  ScrollView,
  Typography,
  Container,
  IconButton,
  ScreenWrapper,
} from '@components/base';
import {HomeSection, IncomeExpenseCard, TransactionItem} from '@components';
// @styles
import {styles} from './home.style';
import {formatCurrency} from '@utils';

const _Home: React.FC<HomeProps> = ({navigation}) => {
  const {t} = useTranslation(['theme']);
  const {theme} = useTheme();
  const {handleOpenNotify} = useHome();
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
      <IconButton
        onPress={handleOpenNotify}
        bundle={BundleIconSetName.MATERIAL_COMMUNITY_ICONS}
        name="bell"
        iconStyle={[styles.iconNotify, {color: theme.color.primary}]}
      />
    );
  }, [theme]);

  const renderHeaderNav = useCallback(
    () => (
      <LinearGradient colors={['#F8EDD8', '#FFF6E5']}>
        <NavBar
          back={false}
          noBackground
          renderRight={renderIconNotification}
          renderTitle={renderFilterMonth}
          renderLeft={renderAvatarUser}
        />
      </LinearGradient>
    ),
    [renderIconNotification, renderFilterMonth, renderAvatarUser],
  );

  return (
    <ScreenWrapper safeLayout noBackground headerComponent={renderHeaderNav()}>
      <ScrollView
        useGestureHandler
        safeLayout
        contentContainerStyle={{paddingBottom: 15}}>
        <LinearGradient
          colors={['#FFF6E5', '#FFF6E5']}
          style={[linearContainerStyle]}>
          <Container noBackground center>
            <Typography type={TypographyType.LABEL_SEMI_MEDIUM_TERTIARY}>
              Account Balance
            </Typography>

            <Typography
              type={TypographyType.LABEL_GIGANTIC}
              style={{fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>
              {formatCurrency(Number('18783000'))}
            </Typography>
          </Container>

          <Container
            noBackground
            row
            style={{justifyContent: 'space-around', marginBottom: 23}}>
            <IncomeExpenseCard type={'Income'} />

            <IncomeExpenseCard type="Expense" />
          </Container>
        </LinearGradient>

        <Container noBackground style={{marginHorizontal: 10}}>
          <HomeSection title="Recently Transaction">
            <TransactionItem
              title="Shopping"
              description="Buy some groceries and milk, bread, noodles"
              amount={formatCurrency(Number('6500'))}
              timeTransaction="12:34"
              type="Expense"
            />

            <TransactionItem
              title="Have receive"
              description="someone has gave"
              amount={formatCurrency(Number('18020000'))}
              timeTransaction="12:34"
              type="Income"
            />

            <TransactionItem
              title="Have receive"
              description="someone has gave"
              amount={formatCurrency(Number('18020000'))}
              timeTransaction="12:34"
              type="Income"
            />
          </HomeSection>
        </Container>
      </ScrollView>
    </ScreenWrapper>
  );
};

export const Home = React.memo(_Home);
