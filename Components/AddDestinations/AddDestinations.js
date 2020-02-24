import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { createNewDestination } from '../../apiCalls';
import DatePicker from '../DatePicker/DatePicker';

const AddDestinations = ({ navigation, route }) => {
  const { tripId } = route.params;
  let [destinationLocation, setDestinationLocation] = useState('');
  let [destinationStartDate, setDestinationStartDate] = useState('');
  let [destinationEndDate, setDestinationEndDate] = useState('');

  // const handleDestinationSubmit = () => {
  //   createNewDestination(tripId, destinationLocation, destinationStartDate, destinationEndDate)
  //     .then(returnedTripData => {
  //       setNewTrip(returnedTripData)
  //     })
  // }

  const handleDestinationSubmit = () => {
    console.log(tripId, destinationLocation, destinationStartDate, destinationEndDate)
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.label}>Destination</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          name='destination'
          value={destinationLocation}
          placeholder='City, Country'
          onChangeText={(text) => setDestinationLocation(text)}
        />
      </View>
      <DatePicker
        setDestinationStartDate={setDestinationStartDate}
        setDestinationEndDate={setDestinationEndDate}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    height: '100%',
    alignItems: 'center',
    padding: 15
  },
  label: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    fontSize: 20,
    paddingHorizontal: 20
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 5,
    height: 70
  },
  button: {
    backgroundColor: '#2CCB70',
    width: '100%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  }
})

export default AddDestinations;

//
// <TouchableOpacity
//   activeOpacity={.8}
//   style={styles.button}
//   onPress={() => navigation.navigate('Calendar', {setDestinationStartDate: setDestinationStartDate, setDestinationEndDate: setDestinationEndDate})}
// >
//   <Text style={{ color: '#0D47A1', fontSize: 20, fontWeight: 'bold' }}>Select Dates</Text>
// </TouchableOpacity>
