import * as React from "react";
import { Text, StyleSheet, Image, View, ScrollView} from "react-native";
import MenuBawah from '../../components/molecules/menuBawah';

import Header from "../../components/molecules/HomeHeader";
import { ImageButton1, ImageButton2, ImageButton3 } from "../../components/molecules/ImgButton";
import Gap from "../../components/atoms/Gap";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.page}> 
      <ScrollView style={styles.scrollViewContent}>
        <Header navigation={navigation} toScreen={'Profile'} text={'Shyalenn'}/>
        <Text style={styles.renovations}>Renovations</Text>
        <View style={styles.contentWrapper}>
          <ImageButton1
          navigation={navigation}
          toScreen="LivingRoom"
          />
          <Gap/>
          <ImageButton2
          navigation={navigation}
          toScreen="Bathroom"
          />
          <Gap/>
          <ImageButton3
          navigation={navigation}
          toScreen="Kitchen"
          />
        </View>
      </ScrollView>
      <MenuBawah/>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    backgroundColor: 'white',
    marginTop: 40,
    paddingBottom: 90,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, // Tinggi navbar
  },
  renovations: {
    top: 118,
    color: "orangered",
    fontFamily: "montserratBold",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    left: 28,
    position: "absolute",
  },
});

export default HomeScreen;
