/* eslint-disable react-native/no-inline-styles */
import {View, Pressable, Image, Text, Modal, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import CustomInputField from '../../components/atoms/CustomInputField';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProp} from '../../navigation/Main.Navigator.types';
import {useDispatch} from 'react-redux';
import {setUserId, setUserEmail} from '../../redux/slices/authSlice';
import {handleLogin} from '../../functions/authenticationFct';
import {styles} from '../../utils/authStyles';

const LoginScreen = () => {
  const navigation = useNavigation<MainNavigatorNavigationProp>();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      const userId = await handleLogin(email, password);
      if (userId) {
        dispatch(setUserId(userId));
        dispatch(setUserEmail(email));
      }
    }
  };
  const handleSingUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };
  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };
  const handleResetPassword = () => {
    setShowForgotPasswordModal(false);
  };
  return (
    <View style={styles.Container}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#e0dcdc" />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.logoContainer}
          />
        </View>
        <View style={styles.FieldView}>
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
          <Pressable
            style={{alignSelf: 'flex-end'}}
            onPress={handleForgotPassword}>
            <Text style={styles.label}>Forgot Password</Text>
          </Pressable>
          <View style={{flex: 1, paddingTop: 50}}>
            <Pressable style={styles.BtnPress} onPress={handleSubmit}>
              <Text style={styles.BtnText}>Log In</Text>
            </Pressable>
          </View>
          <View style={styles.signupPrompt}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Pressable onPress={handleSingUpScreen}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showForgotPasswordModal}
        onRequestClose={() => setShowForgotPasswordModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <CustomInputField
              placeholder=" Enter New Password"
              value={newPassword}
              onChangeText={value => setNewPassword(value)}
            />
            <Pressable style={styles.modalBtn} onPress={handleResetPassword}>
              <Text style={styles.modalBtnText}>Reset Password</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;
