import React, {useCallback, useRef} from 'react';
// @packages
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
// @navigation
import {AppNavigator} from './app-navigator';

export default function RootNavigator() {
  const prevRouteNameRef = useRef<string | undefined>(undefined);
  const navigationRef = createNavigationContainerRef();

  const handleStateChange = useCallback(() => {
    const prevRouteName = prevRouteNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
    if (prevRouteName !== currentRouteName) {
      prevRouteNameRef.current = currentRouteName;
      console.log('viewing_current_screen: ', currentRouteName);
    }
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={handleStateChange}>
      <AppNavigator />
    </NavigationContainer>
  );
}
