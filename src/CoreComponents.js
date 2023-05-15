import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

const CoreComponents = ({title, subTitle}) => {
  const hello = 'Hello World';
  return (
    <View style={styles.parent}>
      {/* <View style={styles.longBox} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Image source={require('../img/preorder.png')} style={styles.image} />
      <View style={styles.yellowBox} />
      <TextInput placeholder="Masukan nama anda" style={styles.textInput} /> */}
      <View style={styles.redBlock} />
      <View style={styles.blueBlock} />
      <View style={styles.greenBlock} />
    </View>
  );
};

const styles = StyleSheet.create({
  redBlock: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },

  blueBlock: {
    backgroundColor: 'blue',
    width: 150,
    height: 150,
  },

  greenBlock: {
    backgroundColor: 'green',
    width: 150,
    height: 150,
  },

  parent: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    rowGap: 5,
  },

  longBox: {
    width: 440,
    height: 200,
    backgroundColor: 'blue',
  },

  title: {
    backgroundColor: 'red',
    paddingTop: 20,
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
  },

  subTitle: {
    backgroundColor: 'green',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },

  yellowBox: {
    width: 440,
    height: 200,
    backgroundColor: 'yellow',
  },

  image: {
    width: 440,
    height: 900,
  },

  textInput: {
    width: 440,
    height: 50,
    backgroundColor: 'white',
  },
});

export default CoreComponents;
