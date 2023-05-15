import React from 'react';
import { View,Text, StyleSheet,ScrollView} from 'react-native';
import TextInput from '../../components/atoms/TextInput';
import Button from '../../components/atoms/Button';


const SignIn= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.textInput}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Masukkan username anda"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={styles.textInput}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Masukkan password anda"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SignIn;