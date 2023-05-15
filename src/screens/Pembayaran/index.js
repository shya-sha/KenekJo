import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/molecules/Header';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import PaymentButton from '../../components/atoms/PaymentBtn';

const Pembayaran = () => {
  return (
    <View style={styles.page}>
      <Header title="Payments"/>
      <View style={styles.contentWrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.paymentMethod}>Payment Methods</Text>
        <Gap height = {11}/>
        <PaymentButton title="Pay with Google" icon={require('../../assets/icons/google-pay.png')} toState={'HomeScreen'} />
        <Gap height = {10}/>
        <PaymentButton title="Pay with Apple" icon={require('../../assets/icons/apple-pay.png')} toState={'HomeScreen'} />
        <Gap height = {10}/>
        <Gap height = {41}/>
      </View>
      </View>
    </View>
  )
}

export default Pembayaran

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper:{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    marginTop: 50,
  },
  paymentMethod: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    color: "#32403f",
    textAlign: "left",
  }
});