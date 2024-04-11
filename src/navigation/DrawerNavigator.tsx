import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNav from './BottomTabNav';
import CustomDrawerContent from './CustomDrawerContent';
import AboutApp from '../screens/UserProfileScreens/AboutApp';
import TermPolicieScreen from '../screens/UserProfileScreens/TermPolicieScreen';
import HelpCenterScreen from '../screens/UserProfileScreens/HelpCenterScreen';
import UserProfileScreen from '../screens/UserProfileScreens/UserProfileScreen';
import AddPostScreen from '../screens/UserProfileScreens/AddPostScreen';

const Drawer = createDrawerNavigator();
const commonIconStyle = {
  width: 40,
  height: 40,
};

const commonLabelStyle = {
  fontSize: 18,
  color: '#000',
};
const renderDrawerIcon = (iconSource: ReturnType<typeof require>) => () =>
  <Image source={iconSource} style={commonIconStyle} />;

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{headerShown: false}}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="Settings"
      component={BottomTabNav}
      options={{
        drawerLabel: 'Settings',
        drawerIcon: renderDrawerIcon(require('../assets/icons/settings.png')),
        drawerLabelStyle: commonLabelStyle,
      }}
    />
    <Drawer.Screen
      name="About"
      component={AboutApp}
      options={{
        drawerIcon: renderDrawerIcon(require('../assets/icons/about.png')),
        drawerLabelStyle: commonLabelStyle,
        drawerActiveBackgroundColor: '#fca28d',
      }}
    />
    <Drawer.Screen
      name="Recipes"
      component={BottomTabNav}
      options={{
        drawerIcon: renderDrawerIcon(require('../assets/icons/recipedraw.png')),
        drawerLabelStyle: commonLabelStyle,
        drawerActiveBackgroundColor: '#fca28d',
      }}
    />
    <Drawer.Screen
      name="Term Policy"
      component={TermPolicieScreen}
      options={{
        drawerIcon: renderDrawerIcon(require('../assets/icons/policy.png')),
        drawerLabelStyle: commonLabelStyle,
        drawerActiveBackgroundColor: '#fca28d',
      }}
    />
    <Drawer.Screen
      name="Help Center"
      component={HelpCenterScreen}
      options={{
        drawerIcon: renderDrawerIcon(require('../assets/icons/help.png')),
        drawerLabelStyle: commonLabelStyle,
        drawerActiveBackgroundColor: '#fca28d',
      }}
    />
    <Drawer.Screen
      name="User info"
      component={UserProfileScreen}
      options={{
        drawerIcon: renderDrawerIcon(require('../assets/icons/userinfo.png')),
        drawerLabelStyle: commonLabelStyle,
        drawerActiveBackgroundColor: '#fca28d',
      }}
    />
    <Drawer.Screen
      name="Add Post"
      component={AddPostScreen}
      options={{
        drawerItemStyle: {height: 0},
        drawerLabel: () => null,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
