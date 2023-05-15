import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export const ImageButton1 = ({navigation, toScreen }) => {
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate(toScreen)} 
    style={styles.button}>
      <Image source={require("../../../assets/img/livinroom.png")} style={styles.img1}/>
      <Text style={[styles.livingroom, styles.position]}>
        Living Room
      </Text>
      <Text style={[styles.harga, styles.position]}>
        Start From 800k IDR
      </Text>
    </TouchableOpacity>
  );
};


export const ImageButton2 = ({ onPress, navigation, toScreen }) => {
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate(toScreen)} 
    style={styles.button}>
      <Image source={require("../../../assets/img/bathroom.png")}/>
      <Text style={[styles.livingroom, styles.position]}>
        Bathroom
      </Text>
      <Text style={[styles.harga, styles.position]}>
        Start From 600K IDR
      </Text>
    </TouchableOpacity>
  );
};

export const ImageButton3 = ({ onPress, navigation, toScreen }) => {
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate(toScreen)} 
    style={styles.button}>
      <Image source={require("../../../assets/img/dapur.jpg")}/>
      <Text style={[styles.livingroom, styles.position]}>
        Kitchen Room
      </Text>
      <Text style={[styles.harga, styles.position]}>
        Start From 300K IDR
      </Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    width: 360,
    height: 200,
    marginHorizontal: 25,
    marginVertical:10,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  livingroom: {
    top: 148,
    fontFamily: 'montserratBold',
    fontWeight: '700',
  },
  position: {
    color: 'white',
    left: 16,
    textAlign: 'left',
    fontSize: 16,
    position: 'absolute',
  },
  harga: {
    top: 168,
    fontFamily: 'montserratRegular',
  }
});
