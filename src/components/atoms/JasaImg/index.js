import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImageWithText = ({ imageSource, text, subText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        style={styles.image}
        source={imageSource}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  image: {
    width: 400,
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  subText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#fff',
    textAlign: 'left',
    paddingBottom: 50,
  }
});

export default ImageWithText;
