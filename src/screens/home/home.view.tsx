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
import {IncomeExpenseCard, TransactionItem} from '@components';
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
    <ScrollView useGestureHandler safeLayout contentContainerStyle={{paddingBottom: 15}} >
      <LinearGradient
        colors={['#F8EDD8', '#FFF6E5']}
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
          <IncomeExpenseCard type="Expense" />
        </Container>
      </LinearGradient>

      <Container
        flex
        noBackground
        style={{marginHorizontal: 10, marginTop: 10}}>
        <Container
          noBackground
          flex
          row
          style={{justifyContent: 'space-between', height: 56}}>
          <Typography type={TypographyType.TITLE_LARGE}>
            Spend Frequency
          </Typography>
          <Button
            style={{
              backgroundColor: theme.color.background,
              paddingVertical: 5,
              paddingHorizontal: 16,
              height: 32,
              borderRadius: theme.layout.borderRadiusHuge,
            }}
            title="See All"
            typoProps={{type: TypographyType.LABEL_SEMI_LARGE_PRIMARY}}
          />
        </Container>

        <Container noBackground>
          <Container
            noBackground
            flex
            row
            style={{justifyContent: 'space-between', height: 56}}>
            <Typography type={TypographyType.TITLE_LARGE}>
              Recent Transaction
            </Typography>
            <Button
              style={{
                backgroundColor: theme.color.background,
                paddingVertical: 5,
                paddingHorizontal: 16,
                height: 32,
                borderRadius: theme.layout.borderRadiusHuge,
              }}
              title="See All"
              typoProps={{type: TypographyType.LABEL_SEMI_LARGE_PRIMARY}}
            />
          </Container>

          <TransactionItem />
        </Container>
      </Container>
    </ScrollView>
  );
};

export const Home = React.memo(_Home);
