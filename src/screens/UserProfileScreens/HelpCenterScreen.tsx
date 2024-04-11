import React from 'react';
import {
  View,
  Image,
  Pressable,
  Text,
  StyleSheet,
  Linking,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {showAlert} from '../../functions/authenticationFct';

const HelpCenterScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@example.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };
  const handleFaxPress = () => {
    showAlert('OUPS! The Fax is not working, leave an email you can call');
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
        <Text style={styles.headerTitle}>Help Center</Text>
        <Text style={styles.text}>
          If you need assistance or have any feedback, please feel free to
          contact us through the following channels:
        </Text>
      </View>

      <Text style={styles.text}>
        If you need assistance or have any feedback, please feel free to contact
        us through the following channels:
      </Text>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{paddingHorizontal: 25}}>
          <Pressable style={{flexDirection: 'row'}} onPress={handleEmailPress}>
            <Image
              source={require('../../assets/icons/gmail.png')}
              style={styles.icon}
            />
            <Text style={styles.contactInfo}>Email: support@example.com</Text>
          </Pressable>
          <Pressable style={{flexDirection: 'row'}} onPress={handlePhonePress}>
            <Image
              source={require('../../assets/icons/call.png')}
              style={styles.icon}
            />
            <Text style={styles.contactInfo}>Phone: +1234567890</Text>
          </Pressable>
          <Pressable style={{flexDirection: 'row'}} onPress={handleFaxPress}>
            <Image
              source={require('../../assets/icons/fax.png')}
              style={styles.icon}
            />
            <Text style={styles.contactInfo}>Fax: +1234567890</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/onlinesupport.png')}
            style={{
              width: 240,
              height: 200,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: '100%',
    backgroundColor: '#a30303',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    marginTop: 10,
    paddingVertical: 40,
  },

  headerTitle: {
    lineHeight: 42,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    fontStyle: 'italic',
    paddingBottom: 20,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 22,
    lineHeight: 29,
    textTransform: 'capitalize',
    fontWeight: '400',
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
    lineHeight: 25,
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default HelpCenterScreen;
