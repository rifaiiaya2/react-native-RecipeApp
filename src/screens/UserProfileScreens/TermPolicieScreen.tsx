/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';

const TermPolicieScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e0dcdc" />
      <View style={styles.ViewCont}>
        <Pressable style={styles.ArrowPress} onPress={handleGoBack}>
          <Image
            source={require('../../assets/icons/left-arrow.png')}
            style={{width: 35, height: 35}}
          />
        </Pressable>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>
          OUPS! The App is Under Construction Now!
        </Text>
      </View>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/animation/termPolicie.json')}
          autoPlay
          loop
          resizeMode="contain"
          style={styles.lottie}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  ViewCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ArrowPress: {
    backgroundColor: '#fca28d',
    margin: 4,
    padding: 4,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  titleContainer: {
    width: '95%',
    backgroundColor: '#a30303',
    borderRadius: 29,
    marginRight: 10,
    marginLeft: 7,
    marginTop: 5,
    paddingVertical: 10,
  },
  textTitle: {
    lineHeight: 44,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '800',
    fontSize: 24,
    fontStyle: 'italic',
  },
  animationContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});

export default TermPolicieScreen;
