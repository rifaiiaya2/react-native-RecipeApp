import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../navigation/Main.Navigator.types';
import {SafeAreaView} from 'react-native-safe-area-context';
const WelcomeScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const handleSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar backgroundColor="#e0dcdc" />
      <View style={styles.Container}>
        <Text style={styles.textStyle}>
          Cook Like A Chef!{' '}
          <Image
            source={require('../assets/images/chef.png')}
            style={{width: 50, height: 50}}
          />
        </Text>
        <View style={styles.ImgContainer}>
          <Image
            source={require('../assets/images/welcome.png')}
            style={{width: 400, height: 425}}
          />
        </View>
        <View style={styles.PressContainer}>
          <Pressable style={styles.BtnPress} onPress={handleSignUpScreen}>
            <Text style={styles.PressText}>SignUp</Text>
          </Pressable>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{color: '#000', fontWeight: '900'}}>
              Already have an account?
            </Text>
            <Pressable onPress={handleLoginScreen}>
              <Text style={{fontWeight: '800', color: '#a30303'}}> Log In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: '#fcf2f2',
  },
  Container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 25,
  },
  textStyle: {
    color: '#0a0a0a',
    fontWeight: '700',
    fontStyle: 'italic',
    fontSize: 34,
    alignSelf: 'center',
  },
  ImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  PressContainer: {
    marginBottom: 4,
  },
  BtnPress: {
    paddingBottom: 10,
    backgroundColor: '#a30303',
    borderRadius: 15,
  },
  PressText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
  },
});

export default WelcomeScreen;
