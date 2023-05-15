import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const JasaHeader1 = () => {
  return (
    <View style={styles.container}>
    <Image
        style={[styles.detailJasaChild, styles.detailPosition, styles.img]}
        resizeMode="cover"
        source={require('../../../assets/img/livinroom.png')}
      />
      <Text style={[styles.serviceDetail]}> Service Detail </Text>
      <Text style={styles.nama}>Living Room</Text>
      <Text style={styles.harga}>Start From 800k IDR</Text>
    </View>
  );
};

export const JasaHeader2 = () => {
  return (
    <View style={styles.container}>
    <Image
        style={[styles.detailJasaChild, styles.detailPosition, styles.img]}
        resizeMode="cover"
        source={require("../../../assets/img/bathroom.png")}
      />
      <Text style={[styles.serviceDetail]}> Service Detail </Text>
      <Text style={styles.nama}>Bathroom</Text>
      <Text style={styles.harga}>Start From 600k IDR</Text>
    </View>
  );
};

export const JasaHeader3 = () => {
  return (
    <View style={styles.container}>
    <Image
        style={[styles.detailJasaChild, styles.detailPosition, styles.img]}
        resizeMode="cover"
        source={require("../../../assets/img/dapur.jpg")}
      />
      <Text style={[styles.serviceDetail]}> Service Detail </Text>
      <Text style={styles.nama}>Kitchen Room</Text>
      <Text style={styles.harga}>Start From 300k IDR</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  serviceDetail:{
    top: 53,
    width: 113,
    textAlign: "left",
    fontFamily: 'poppinsBold',
    color: 'white',
    fontSize: 17,
    left: 19,
    position: "absolute",
    fontWeight: 800,
  },
  img:{
    height: 260,
    width: 500,
    paddingHorizontal:20,
    alignSelf: 'center', // Tambahkan ini agar gambar rata tengah horizontal
  },
  nama:{
    top: 180,
    fontFamily: 'montserratBold',
    width: 125,
    fontWeight: "700",
    height: 34,
    textAlign: "left",
    color: 'white',
    fontSize: 16,
    left: 19,
    position: "absolute",
  },
  harga:{
    top: 200,
    fontFamily: 'montserratRegular',
    width: 201,
    height: 24,
    textAlign: "left",
    color: 'white',
    fontSize: 16,
    left: 19,
    position: "absolute",
  },
});