import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Button = ({ title, toState }) => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate(toState);
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orangered',
    paddingVertical: 8,
    paddingHorizontal: 140,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 40,
    paddingVertical: 20,
  
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});

export default Button;
