import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorParamList} from './Main.Navigator.types';
import LoginScreen from '../screens/authentication/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/authentication/SignUpScreen';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/store/store';
import DrawerNavigator from './DrawerNavigator';
import IngredientsScreen from '../screens/IngredientsScreen';

const MainNavigator = () => {
  const MainStackNavigator =
    createNativeStackNavigator<MainNavigatorParamList>();

  const {userId} = useSelector((state: RootState) => state.auth);
  return (
    <>
      {userId ? (
        <DrawerNavigator />
      ) : (
        <MainStackNavigator.Navigator initialRouteName="WelcomeScreen">
          <MainStackNavigator.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <MainStackNavigator.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <MainStackNavigator.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <MainStackNavigator.Screen
            name="IngredientsScreen"
            component={IngredientsScreen}
            options={{headerShown: false}}
          />
        </MainStackNavigator.Navigator>
      )}
    </>
  );
};
export default MainNavigator;
