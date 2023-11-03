import React from 'react';
import {StyleSheet, StatusBar, LogBox} from 'react-native';
// @packages
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
// @stores
import {persistor, store} from './store';
// @contexts
import {ThemeProvider} from '@shared';
// @navigation
import RootNavigator from '@routes';
// @constants
import {BASE_LIGHT_THEME} from '@resources/theme';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flashMessageTitle: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider initial={BASE_LIGHT_THEME}>
          <SafeAreaProvider>
            <StatusBar />
            <GestureHandlerRootView style={styles.container}>
              <RootNavigator />

              <FlashMessage titleStyle={styles.flashMessageTitle} />
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
