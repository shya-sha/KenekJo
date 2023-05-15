import {StyleSheet, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import ImageWithText from '../../components/atoms/JasaImg';

const index = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Order History</Text>
      <ImageWithText
        imageSource={require('../../assets/images/living-room.png')}
        text="Living Room"
        subText="15/03/2023"
      />
      <ImageWithText
        imageSource={require('../../assets/images/bathroom.png')}
        text="Bathroom"
        subText="15/03/2023"
      />

    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    paddingRight: 250,
    paddingTop: 50,
    color : '#32403F',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  nameText: {
    textAlign: 'center',
    paddingTop: 30, 
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: '#F3640D',

  }

})