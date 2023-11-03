export interface TabListProps {
  tabList: TabItem[]
}

export type TabItem = {
  iconName: string;
  selectedIconName?: string;
  routeName: string;
  titleKey: string;
  component: React.ComponentType | React.FC;
};
