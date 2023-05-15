import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PaymentButton = ({title, icon, toState}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(toState);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orangered',
    padding: 16,
    borderRadius: 25,
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentButton;
