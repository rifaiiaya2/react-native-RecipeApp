/* eslint-disable react-native/no-inline-styles */
import {View, Pressable, Image, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import CustomInputField from '../../components/atoms/CustomInputField';
import {setUserId} from '../../redux/slices/authSlice';
import {useDispatch} from 'react-redux';
import {handleSignUp} from '../../functions/authenticationFct';
import {styles} from '../../utils/authStyles';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSubmit = async () => {
    if (name && email && password) {
      const userId = await handleSignUp(name, email, password);
      if (userId) {
        dispatch(setUserId(userId));
      }
    }
  };
  return (
    <View style={styles.Container}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#e0dcdc" />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/signup.png')}
            style={styles.logoContainer}
          />
        </View>
        <View style={styles.FieldView}>
          <CustomInputField
            label="Full Name"
            placeholder="Full Name"
            value={name}
            onChangeText={value => setName(value)}
          />
          <CustomInputField
            label="Email"
            placeholder="Enter Email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <CustomInputField
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <View style={{flex: 1, paddingTop: 50}}>
            <Pressable style={styles.BtnPress} onPress={handleSubmit}>
              <Text style={styles.BtnText}>Sign Up</Text>
            </Pressable>
          </View>
          <View style={styles.signupPrompt}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <Pressable onPress={handleLoginScreen}>
              <Text style={styles.signupLink}> Log In</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SignUpScreen;
