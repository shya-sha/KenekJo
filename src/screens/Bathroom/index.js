import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import BodyDetail from "../../components/molecules/BodyDetail";
import Button from "../../components/atoms/Button";
import {JasaHeader2} from "../../components/molecules/JasaHeader";

const BathRoom = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <JasaHeader2 title="BathRoom" navigation={navigation}/>
        <BodyDetail/>
        <Button navigation={navigation} toState={'Pemesanan'} title={'Proceed'}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
  
  },
});

export default BathRoom;

