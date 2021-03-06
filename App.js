/**
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import {configureStore} from './src/AppStore/ConfigureStore';
import SplashScreen from 'react-native-splash-screen';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

const store = configureStore();

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <SafeAreaProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    // </SafeAreaProvider>
  );
};

export default App;
