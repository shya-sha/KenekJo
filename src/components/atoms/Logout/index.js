import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutText = ({ toState }) => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    navigation.navigate(toState);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image style={styles.icon} source={require('../../../assets/icons/logout.png')} />
        <Text style={styles.text}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 280,
    left: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  text: {
    paddingLeft: 10, 
    color : '#32403F',
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    fontWeight: '300',
  },
});

export default LogoutText;
