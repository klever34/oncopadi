import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import {colors, baseUrl} from '../../constants/index';
import {AuthContext} from '../../../context';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = (props) => {
  const {signIn} = React.useContext(AuthContext);
  const [buttonStatus, setButtonStatus] = React.useState(false);
  const [showIndicator, setShowIndicator] = React.useState(false);
  const [userEmail, setEmail] = React.useState(null);
  const [userPassword, setPassword] = React.useState(null);
  const [pwdStatus, setPwdStatus] = React.useState(true);
  const [errorMsg, setErrorMsg] = React.useState(false);
  const [msg, setMsg] = React.useState(null);
  
  const authUser = async () => {
    await AsyncStorage.setItem('@user_token', 'hghghhgchgchghghghchghghchchgchghgc');
    signIn();
    return;

    if (!userEmail || !userPassword) return;
    setShowIndicator(true);
    setButtonStatus(true);

    var userData = {
      email: userEmail,
      password: userPassword,
    };

    try {
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      const result = await axios.post(`${baseUrl}auth/learner/login`, userData);
      await AsyncStorage.setItem('@user_token', result.data.access_token);
      await AsyncStorage.setItem(
        '@user_name',
        `${result.data.user.first_name} ${result.data.user.last_name}`,
      );
      await AsyncStorage.setItem('@user_email', result.data.user.email);
      await AsyncStorage.setItem('@user_id', result.data.user.id);
      await AsyncStorage.setItem(
        '@user_phone',
        `${result.data.user.phone_number}`,
      );
      await AsyncStorage.setItem(
        '@user_verified',
        `${result.data.user.verified}`,
      );
      await AsyncStorage.setItem('@user_role', result.data.user.role);
      signIn();
      setShowIndicator(false);
      setButtonStatus(false);
    } catch (error) {
      console.log(error.response.data);
      setErrorMsg(true);
      setMsg(error.response.data.errors[0].title);
      setShowIndicator(false);
      setButtonStatus(false);
    }
  };

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/images/doc.jpg')}
      style={{width: '100%', height: '100%', flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          style={{backgroundColor: 'black', flex: 1}}>
          <View
            style={{
              padding: 30,
              flex: 1,
              justifyContent: 'center',
              marginVertical: Platform.OS == 'ios' ? 120 : 80,
              backgroundColor: colors.bgColor,
              marginHorizontal: 10,
              borderRadius: 6,
            }}>
            <View style={{alignItems: 'center', marginBottom: 30}}>
              <Image source={require('../../assets/images/logo.png')} />
            </View>
            <Text style={styles.textStyle}>E-Mail Address*</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder="Email"
                style={styles.txtInput}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <Text style={styles.textStyle}>Password*</Text>
            <View style={styles.borderStyle}>
              <TextInput
                placeholder="Password"
                style={[styles.txtInput, {flex: 1}]}
                secureTextEntry={pwdStatus}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <Text style={styles.forgotPwd}>Forgot Password?</Text>

            {errorMsg && (
              <Text style={[styles.forgotPwd, {color: 'red'}]}>{msg}</Text>
            )}
            <View style={styles.btmContainer}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => authUser()}>
                <Text style={styles.smallLogin}>Login</Text>
                {showIndicator && (
                  <ActivityIndicator
                    size="small"
                    color="#ffffff"
                    style={{paddingHorizontal: 5, marginTop: -3}}
                  />
                )}
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', marginVertical: 20}}>
                  <Text style={[styles.forgotPwd, {fontSize: 14}]}>
                    Do not have an account?
                  </Text>
                  <Text
                    style={styles.createAct}
                    onPress={() => props.navigation.push('Register')}>
                    Sign Up?
                  </Text>
                  <Text
                    style={[
                      styles.createAct,
                      {color: colors.txtInputBorderBtm},
                    ]}>
                    Instead
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bigLogin: {
    color: colors.primary,
    fontFamily: 'Poppins-Medium',
    fontSize: 36,
    marginBottom: 50,
  },
  smallLogin: {
    color: colors.textColor,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    borderRadius: 6,
  },
  forgotPwd: {
    fontFamily: 'Poppins-Regular',
    color: colors.txtInputBorderBtm,
    // marginTop: 30
    fontSize: 12,
  },
  createAct: {
    fontFamily: 'Poppins-Regular',
    color: colors.primary,
    paddingHorizontal: 3,
  },
  txtInput: {
    fontFamily: 'Poppins-Regular',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    marginVertical: Platform.OS === 'ios' ? 15 : 2,
    marginLeft: 10,
  },
  btmContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  borderStyle: {
    borderWidth: 0.5,
    borderColor: colors.secondary,
    borderRadius: 6,
    marginVertical: 15,
  },
  textStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7D7D89',
  },
});

export default Login;
