import * as React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import BodyDetail from "../../components/molecules/BodyDetail";
import Button from "../../components/atoms/Button";
import {JasaHeader3} from "../../components/molecules/JasaHeader";

const Kitchen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <JasaHeader3 title="Kitchen" navigation={navigation}/>
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

export default Kitchen;

