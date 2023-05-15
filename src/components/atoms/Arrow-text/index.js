import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const ArrowText = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image source={require('../../../assets/icons/arrow-right.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 50,
  },
  text: {
    paddingLeft: 30, 
    color : '#32403F',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    fontWeight: '300',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    right: 50,
  },
});

export default ArrowText;
