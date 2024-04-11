import {
  View,
  Image,
  Pressable,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';

const AboutApp = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.Container}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#e0dcdc" />
        <View style={styles.ViewCont}>
          <Pressable style={styles.ArrowPress} onPress={handleGoBack}>
            <Image
              source={require('../../assets/icons/left-arrow.png')}
              style={{width: 35, height: 35}}
            />
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/about.png')}
            style={{width: 380, height: 320, marginHorizontal: 20}}
          />
        </View>
        <View style={styles.AboutView}>
          <Text style={styles.title}>Welcome to our recipe app!</Text>
          <Text style={styles.txt}>
            We're passionate about making cooking an enjoyable and hassle-free
            experience for everyone. Whether you're a seasoned chef or a
            beginner in the kitchen, our app offers a diverse range of recipes
            to suit every taste and occasion. Browse through our collection of
            mouthwatering dishes, from comforting classics to innovative
            creations. With just a tap, you can explore detailed ingredient
            lists and step-by-step instructions, making meal preparation a
            breeze. Additionally, show some love to your favorite recipes by
            liking them, and let others know about your culinary adventures.
            Join us on this culinary journey and elevate your cooking skills
            with our App 'Cook With Love'!
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ViewCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ArrowPress: {
    backgroundColor: '#fca28d',
    margin: 8,
    padding: 4,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  AboutView: {
    flex: 1,
    backgroundColor: '#a30303',
    paddingHorizontal: 12,
    paddingVertical: 40,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
  },
  title: {
    color: '#ccd4eb',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    textAlignVertical: 'center',
  },
  txt: {
    color: '#ebeef7',
    padding: 8,
    marginTop: 13,
    fontSize: 15,
    fontFamily: 'tomato',
    fontWeight: '300',
    textAlign: 'left',
  },
});

export default AboutApp;
