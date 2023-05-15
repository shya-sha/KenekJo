import React from 'react';
import {View, StyleSheet} from 'react-native';

const Gap = () => {
  return <View style={styles.space}></View>;
};

export default Gap;

const styles = StyleSheet.create({
  space: {
    height: 30,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});