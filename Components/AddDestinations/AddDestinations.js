import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { createNewDestination } from '../../apiCalls';
import DatePicker from '../DatePicker/DatePicker';

const AddDestinations = ({ navigation, route }) => {
  const { tripId, handleTripsFetch } = route.params;
  let [destinationLocation, setDestinationLocation] = useState('');
  let [destinationStartDate, setDestinationStartDate] = useState('');
  let [destinationEndDate, setDestinationEndDate] = useState('');
  let [newDestination, setNewDestination] = useState([]);
  let [error, setError] = useState('');

  const handleDestinationSubmit = () => {
    if (destinationLocation !== '' && destinationStartDate !== ''  && destinationEndDate !== '' ) {
      createNewDestination(tripId, destinationLocation, destinationStartDate, destinationEndDate)
        .then(returnedTripData => {
          setNewDestination(returnedTripData);
          navigation.navigate('Trips')
          handleTripsFetch()
        })
        .catch(error => {
          console.log(error)
        });
      resetInputs();
    } else {
      resetInputs();
      setError('All fields required');
    }
  }

  const handleChange = (text) => {
    setError('');
    setDestinationLocation(text)
  }


  const resetInputs = () => {
    setDestinationLocation('');
    setDestinationStartDate('');
    setDestinationEndDate('');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      {error === '' ?
        <Text style={styles.label}>
          Destination
        </Text>
        :
        <Text style={styles.error}>
          {error}
        </Text>
      }
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          name='destination'
          value={destinationLocation}
          placeholder='City, Country'
          onChangeText={(text) => handleChange(text)}
        />
      </View>
      <DatePicker
        setDestinationStartDate={setDestinationStartDate}
        setDestinationEndDate={setDestinationEndDate}
      />
      <TouchableOpacity
        activeOpacity={.8}
        style={styles.button}
        onPress={() => handleDestinationSubmit()}
      >
        <Text style={{ color: '#0D47A1', fontSize: 20, fontWeight: 'bold' }}>Add to Trip</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E88E5',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  },
  label: {
    color: '#fff',
    fontSize: 20
  },
  error: {
    color: '#f7003d',
    fontSize: 25,
    fontWeight: 'bold'
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
