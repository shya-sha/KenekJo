import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingbottom: 723,
    paddingLeft: 20,
    paddingRight: 228.02,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    color: 'black',
  }
});