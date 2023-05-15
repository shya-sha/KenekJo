import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BodyDetail = () => {
  return (
    <View style={styles.container}>
         <Text style={styles.judul}>Detail Service Living Room</Text>
        <Text style={styles.subJudul}>
          Layanan ini dirancang khusus untuk memberikan perawatan, pembersihan, ataupun renovasi menyeluruh pada ruang tamu 
          (living room) Anda. Dengan menggunakan layanan ini, Anda akan mendapatkan berbagai keuntungan dengan menggunakan Service kami.
        </Text>
        <Text style={styles.penjelasan}>
          Service Living Room yang kami lakukan cukup banyak dari renovasi yang mana itu akan mengubah atau memperbaharui tampilan, fungsi, dan suasana dari living room dari rumah Anda, 
          serta untuk menciptakan lingkungan yang lebih segar, fungsional, dan sesuai dengan selera dan gaya yang diinginkan dari penghuni rumah.
          Kemudian kami menyediakan service pembersihan secara keseluruhan dari ruang tamu Anda, dan juga perawatan dari furniture yang ada di ruang tamu customer.
        </Text>

        <View style={styles.hour}>
          <Image
            style={styles.vector}
            resizeMode="cover"
            source={require("../../../assets/img/Vector.png")}
          />
          <Text style={styles.hours}>5 - 12 hours</Text>
        </View>

    </View>
  )
}

export default BodyDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    judul: {
        fontFamily: 'poppinsMedium',
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 10,
        top: 20,
        left: 30,
      
      },
      subJudul: {
        top: 20,
        paddingHorizontal:30,
        fontFamily: 'poppinsRegular',
        fontSize: 16,
        marginBottom: 20,
        textAlign: "justify",
        lineHeight: 28,
      },
      penjelasan: {
        top: 20,
        paddingHorizontal:30,
        fontFamily: 'poppinsRegular',
        fontSize: 14,
        textAlign: "justify",
        lineHeight: 28,
      },
      hour: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
      },
      hours: {
        fontFamily: 'poppinsRegular',
        fontSize: 14,
        marginRight: 10,
        paddingHorizontal: 40,
        paddingTop: 40
      },
      vector: {
        width: 25,
        height: 25,
        left: 30,
        top: 20
      },
})