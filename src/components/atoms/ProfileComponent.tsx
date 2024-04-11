/* eslint-disable react-native/no-inline-styles */
import {View, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainNavigatorParamList} from '../../navigation/Main.Navigator.types';

type ProfileScreenNavigationProp = DrawerNavigationProp<
  MainNavigatorParamList,
  'HomeScreen'
>;
const ProfileComponent = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingLeft: 22,
        margin: 5,
      }}>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../../assets/icons/profile.png')}
          style={{width: 60, height: 60}}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

export default ProfileComponent;
