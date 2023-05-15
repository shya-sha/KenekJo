import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/molecules/Header';
import { Calendar } from 'react-native-calendars';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const Pemesanan = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  }

  const markedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = {selected: true, marked: true, selectedColor: 'orange'}
  }

  return (
    <View style={styles.page}>
      <Header title = "Booking" />
      <View style={styles.contentWrapper}>
        <Calendar 
          onDayPress={handleDateSelect}
          markedDates={markedDates}
        />
        <Gap height={70}/>
        <Button title = "Proceed" toState={'Pembayaran'}/>
      </View>
    </View>
  )
}

export default Pemesanan

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper:{
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
});
