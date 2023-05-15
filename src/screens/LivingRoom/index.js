import React from "react";
import {StyleSheet, View, ScrollView } from "react-native";
import BodyDetail from "../../components/molecules/BodyDetail";
import Button from "../../components/atoms/Button";
import {JasaHeader1} from "../../components/molecules/JasaHeader";

const index = ({navigation}) => {

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <JasaHeader1 title="LivingRoom"/>
        <BodyDetail />
        <Button navigation={navigation} toState={'Pemesanan'} title={'Proceed'}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
})

export default index
