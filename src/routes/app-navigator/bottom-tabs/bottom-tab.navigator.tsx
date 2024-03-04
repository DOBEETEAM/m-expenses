// @components
import {TabItem, TabList} from './tab-list';
import {Budget, Home, Profile, TransactionHistory} from '@screens';

const HomeTab: TabItem = {
  iconName: 'home-outline',
  selectedIconName: 'home-sharp',
  routeName: 'Home',
  titleKey: 'home',
  component: Home as any,
};

const TransactionTab: TabItem = {
  iconName: 'swap-horizontal-outline',
  selectedIconName: 'swap-horizontal',
  routeName: 'Transaction',
  titleKey: 'transaction',
  component: TransactionHistory as any,
};

const AddButtonTab: TabItem = {
  iconName: 'add',
  routeName: 'Add',
  titleKey: '',
  component: Home as any,
  type: 'superButton',
};

const BudgetTab: TabItem = {
  iconName: 'pie-chart-outline',
  selectedIconName: 'pie-chart',
  routeName: 'Budget',
  titleKey: 'budget',
  component: Budget as any,
};

const ProfileTab: TabItem = {
  iconName: 'person-outline',
  selectedIconName: 'person',
  routeName: 'Profile',
  titleKey: 'profile',
  component: Profile as any,
};

export const BottomTabNavigator = () => {
  return (
    <TabList
      tabList={[HomeTab, TransactionTab, AddButtonTab, BudgetTab, ProfileTab]}
    />
  );
};
