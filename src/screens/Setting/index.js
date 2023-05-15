import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ArrowText from '../../components/atoms/Arrow-text'
import LogoutText from '../../components/atoms/Logout'

const index = ({navigation}) => {
  return (
    <View>
      <Text style={styles.namaText}>Shyalenn{'\n'}Kolibonso</Text>
      <ArrowText text='Profile' onPress={() => navigation.navigate('Profile')}/>
      <ArrowText text='My Renovations' onPress={() => navigation.navigate('orderHistory')}/>
      <LogoutText toState={'LogIn'}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  namaText: {
    paddingLeft: 30,
    paddingTop: 50,
    color : '#F3640D',
    fontSize: 42,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
})