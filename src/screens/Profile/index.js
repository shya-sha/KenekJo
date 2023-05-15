import {StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import React from 'react';
import ImageWithText from '../../components/atoms/JasaImg';
import MenuBawah from '../../components/molecules/menuBawah';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>My Profile</Text>
        <Image
          style={styles.profilePicture}
          source={require('../../assets/images/profile-pic.png')}
        />
        <Text style={styles.nameText}>Shyalenn{'\n'}Kolibonso</Text>
        <Text style={styles.text}>Renovations</Text>
        <ImageWithText
          imageSource={require('../../assets/images/living-room.png')}
          text="Living Room"
          subText="15/03/2023"
          onPress={() => navigation.navigate('LivingRoom')}
        />
        <ImageWithText
          imageSource={require('../../assets/images/bathroom.png')}
          text="Bathroom"
          subText="15/03/2023"
          onPress={() => navigation.navigate('Bathroom')}
        />
      </ScrollView>
      <MenuBawah />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    marginTop: 25,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },
  text: {
    paddingRight: 250,
    paddingTop: 50,
    color: '#32403F',
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
  },
});
