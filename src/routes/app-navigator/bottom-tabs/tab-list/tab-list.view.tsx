import React, {useCallback, useMemo} from 'react';
// @packages
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
// @types
import {TabItem, TabListProps} from './tab-list.type';
// @hooks
import {useTabList} from './tab-list.hook';
import {useTheme} from '@shared/hooks';
// @navigation
import {BottomTabParamsList} from '@data/models';
// @components
import {BundleIconSetName, Icon} from '@components/base';
import {CustomTab} from '../custom-tab';
import {AddButtonPlus} from '@components';
// @styles
import {styles} from './tab-list.style';

const BottomTabStack = createBottomTabNavigator<BottomTabParamsList>();

const _TabList: React.FC<TabListProps> = ({tabList}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const {opened, toggleOpened} = useTabList();

  const screenOptions: BottomTabNavigationOptions = useMemo(() => {
    return {
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: theme.color.background,
      },
    };
  }, [theme]);

  const renderIcon = useCallback(
    (tabItem: TabItem) =>
      (props: {focused: boolean; color: string; size: number}) => {
        let iconName;
        if (props.focused) {
          iconName = tabItem.selectedIconName || tabItem.iconName;
        } else {
          iconName = tabItem.iconName;
        }

        return (
          <Icon
            bundle={BundleIconSetName.IONICONS}
            name={iconName}
            color={props.color}
            style={[styles.icon]}
          />
        );
      },
    [],
  );

  const tabScreenOptions: (tabItem: TabItem) => BottomTabNavigationOptions =
    useCallback(
      (tabItem: TabItem) => {
        if (tabItem.type === 'superButton') {
          return {
            headerShown: false,
            title: '',
            tabBarButton: (props) => (
              <AddButtonPlus
                {...props}
                opened={opened}
                toggleOpen={toggleOpened}
              />
            ),
          };
        }

        return {
          title: t(`appTab.${tabItem.titleKey}.title`),
          tabBarIcon: renderIcon(tabItem),
          tabBarStyle: {
            ...theme.layout.shadow,
            backgroundColor: theme.color.surface,
            borderColor: theme.color.border,
          },
          tabBarActiveTintColor: theme.color.primaryHighlight as string,
          headerShown: false,
        };
      },
      [renderIcon, theme, t, opened, toggleOpened],
    );

  return (
    <BottomTabStack.Navigator
      screenOptions={screenOptions}
      tabBar={(props) => <CustomTab {...props} />}>
      {tabList.map((item) => {
        return (
          <BottomTabStack.Screen
            key={item.routeName}
            name={item.routeName as keyof BottomTabParamsList}
            component={item.component}
            options={tabScreenOptions(item)}
            listeners={{
              tabPress: (e) => opened && e.preventDefault(),
            }}
          />
        );
      })}
    </BottomTabStack.Navigator>
  );
};

export const TabList = React.memo(_TabList);
