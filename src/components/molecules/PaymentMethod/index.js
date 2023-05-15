import { StyleSheet, Text } from 'react-native'
import React from 'react'

const PaymentMethod = ({title}) => {
  return (
      <Text style={styles.paymentMethod}>{title}</Text>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
    paymentMethod: {
    position: "absolute",
    top: 20,
    left: 28,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Poppins_bold",
    color: "#32403f",
    textAlign: "left",
    width: 150
    },
});