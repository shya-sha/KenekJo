import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = ({text, navigation, toScreen}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(toScreen)} >
      <Text style={styles.sambutanContainer}>
          <Text style={styles.welcomeBack}>{`Welcome Back, `}</Text>
          <Text style={styles.nama}>{text}</Text>
        
      </Text>
      <Image source={require('../../../assets/img/profilePicture.png')} style={styles.roundImage}/>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 108,
    width: '100%',
  },
  roundImage: {
    top: 46,
    width: 50,
    height: 50,
    left: 26,
    position: "absolute",
  },
  welcomeBack: {
    fontFamily: "poppinsRegular",
    color: "#2b2b2b",
  },
  nama: {
    fontFamily: "poppinsBold",
    color: "orangered",
    fontWeight: "700",
  },
  sambutanContainer: {
    top: 61,
    left: 85,
    fontSize: 16,
    textAlign: "left",
    position: "absolute",
  },
});