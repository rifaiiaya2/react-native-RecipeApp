import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Linking,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainNavigatorParamList} from '../../navigation/Main.Navigator.types';

type UserProfileNavigationProp = DrawerNavigationProp<MainNavigatorParamList>;

const UserProfileScreen = () => {
  const navigation = useNavigation<UserProfileNavigationProp>();
  const userEmail = useSelector((state: RootState) => state.auth.userEmail);

  useEffect(() => {
    console.log('Email from Redux inside:', userEmail);
  }, [userEmail]);
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@example.com');
  };
  const handleAddPost = () => {
    navigation.navigate('Add Post');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#e0dcdc" />
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/topView.jpg')}
          resizeMode="cover"
          style={{width: '100%', height: 320}}
        />
      </View>
      <View style={styles.ContentView}>
        <Image
          source={require('../../assets/icons/profile.png')}
          resizeMode="contain"
          style={styles.ImgProf}
        />
        <Pressable onPress={handleEmailPress}>
          <Text style={styles.userEmail}>Email: {`${userEmail}`}</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleAddPost}>
            <Image
              source={require('../../assets/icons/add-post.png')}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>New Post</Text>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flex: 1,
          }}>
          <Image
            source={require('../../assets/images/welcome.png')}
            resizeMode="cover"
            style={{width: 330, height: 300}}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fcf2f2',
  },
  ImgProf: {
    width: 155,
    height: 155,
    borderRadius: 999,
    borderColor: '#9a9b9c',
    borderWidth: 1.5,
    marginTop: -200,
  },
  userEmail: {
    color: '#000',
    marginVertical: 4,
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  ContentView: {
    flex: 1,
    backgroundColor: '#a30303',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#262525',
    fontWeight: '700',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
export default UserProfileScreen;
