import React, { useState } from 'react';
import { View,Text, StyleSheet,ScrollView, TouchableOpacity, Keyboard} from 'react-native';
import TextInput from '../../components/atoms/TextInput';
import Button from '../../components/atoms/Button';
import HomeScreen from '../../screens/HomeScreen';


const LogIn= ({navigation}) => {
  const [inputs, setInputs] =useState({username:'', password:''});
  const [errors, setErrors] =useState({});

  const handleChange = (value, input) => {
    setInputs(prevState => ({...prevState, [input]: value}))
  }

  const handleError = (errMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errMessage}))
  }

//validation
const validate = () => {
  Keyboard.dismiss();
  let isValid = true;

  if(!inputs.username){
    handleError('Please input username', 'username');
    isValid = false;
  } else if(!/^[a-zA-Z0-9_]{5,}$/.test(inputs.username)){
    handleError('Username should be at least 5 characters long and contain only letters, numbers, and underscores', 'username');
    isValid = false;
  }

  if(!inputs.password){
    handleError('Please input password', 'password');
    isValid = false;
  } else if(!inputs.password < 5){
    handleError('Password must more than 5', 'password');
    isValid = false;
  }

  if(isValid){
    navigation.navigate('HomeScreen');
  }
}

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.welcome}>Welcome to KenekJo</Text>
      </View>

      <TextInput 
        label="Username" 
        placeHolder="Type your username" 
        error ={errors.username}
        onFocus={() => {handleError(null, 'username')}}
        onChangeText= {value => handleChange(value, 'username')}
        />
      <View style={{marginBottom:25}}/>
      <TextInput 
      label="Password" 
      placeHolder="Type your password" 
      password
      error ={errors.password}
      onFocus={() => {handleError(null, 'password')}}
      onChangeText= {value => handleChange(value, 'password')}
      />
      <Text style={styles.text}>By Clicking "SignIn" You Agree to the Privacy Policy
        and Terms of Use
        </Text>
        <Button title = "Sign In" toState={'HomeScreen'}/>
      <View style={styles.textBottom}>
        <TouchableOpacity onPress={() => {navigation.navigate('SignUp');}}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
  },
  wrapper:{
    marginTop:50,
    marginBottom:20,
    alignItems:'center',
  },
  welcome:{
  fontSize: 24,
  fontFamily:'Poppins',
  color: 'black',
  fontWeight: 'bold',
  marginTop: 100,
  marginBottom: 50,
  textAlign:'center',
  },
  text:{
    fontSize:12,
    marginTop:10,
    color:'#B5B5B5',
    textAlign:'center',
  },
  textBottom:{
    justifyContent:'center',
    alignItems:'center',
  },
  signUp:{
    fontFamily:'Poppins',
    fontSize:18,
    fontWeight:'500',
    marginTop: 20,
    color:'#939393',
    textAlign:'center',
  }
});

export default LogIn;