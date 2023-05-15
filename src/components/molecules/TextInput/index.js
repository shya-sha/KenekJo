import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextInput = () => {
  return (
    <View>
      <Text style={styles.text}>Payment Methods</Text>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: 'black',
  },
});