import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {store} from './src/redux/store/store';
import {Provider} from 'react-redux';
import {linking} from './src/functions/linking';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
