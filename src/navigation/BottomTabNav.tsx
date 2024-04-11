import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import RecipeScreen from '../screens/RecipeScreen';
import {logout} from '../redux/slices/authActions';
import LogoutComponent from '../components/atoms/LogoutComponent';
import {useAppDispatch} from '../redux/store/store';
import IngredientsScreen from '../screens/IngredientsScreen';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Tab.Navigator
      initialRouteName="RecipeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#a30303',
        tabBarInactiveTintColor: '#7a7a7a',
        headerShown: false,
      }}>
      <Tab.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/recipetab.png')}
              style={{
                width: 45,
                height: 32,
                resizeMode: 'contain',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="IngredientsScreen"
        component={IngredientsScreen}
        options={{
          tabBarItemStyle: {height: 0},
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="LogoutScreen"
        component={LogoutComponent}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            handleLogout();
          },
        }}
        options={{
          tabBarLabel: 'Log-Out',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/logouttab.png')}
              style={{width: 45, height: 32, resizeMode: 'contain'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNav;
