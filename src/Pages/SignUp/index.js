import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../../components/atoms/TextInput';
import Button from '../../components/atoms/Button';

const SignUp = ({navigation}) => {
  const handleInputFocus = () => {
    console.log('Input focused');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.welcome}>Welcome to KenekJo</Text>
      </View>

      <TextInput
        label="Username"
        placeHolder="Type your username"
        onFocus={handleInputFocus}
      />
      <View style={{marginBottom: 10}} />
      <TextInput
        label="Email"
        placeHolder="Type your email"
        onFocus={handleInputFocus}
      />
      <View style={{marginBottom: 10}} />
      <TextInput
        label="Password"
        placeHolder="Type your password"
        password
        onFocus={handleInputFocus}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LogIn');
        }}>
        <Button title="SignUp" toState={'LogIn'} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  wrapper: {
    marginTop: 20,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'Poppins',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 50,
    textAlign: 'center',
  },
  signUp: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 20,
    color: '#939393',
    textAlign: 'center',
  },
});

export default SignUp;
