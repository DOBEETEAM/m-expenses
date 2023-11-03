// @components
import {TabItem, TabList} from './tab-list';
import {Home} from '@screens';

const HomeTab: TabItem = {
  iconName: 'home-outline',
  selectedIconName: 'home-sharp',
  routeName: 'Home',
  titleKey: 'home',
  component: Home as any,
};

// const BudgetTab: TabItem = {
//   iconName: 'pie-chart-outline',
//   selectedIconName: 'pie-chart',
//   routeName: 'Budget',
//   titleKey: 'budget',
//   component: BudgetManagement as any,
// };

// const ProfileTab: TabItem = {
//   iconName: 'person-outline',
//   selectedIconName: 'person',
//   routeName: 'Profile',
//   titleKey: 'profile',
//   component: Profile as any,
// };

export const BottomTabNavigator = () => {
  return <TabList tabList={[HomeTab]} />;
};
