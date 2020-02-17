import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const TripPreview = ({item}) => {
  const { name, startDate, endDate, originAbbrev, finalDestinationAbbrev} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.cities}>
        <Text style={styles.origin}>{originAbbrev}</Text>
        <Text style={styles.destination}>{finalDestinationAbbrev}</Text>
      </View>
      <View style={styles.cities}>
        <Text style={styles.startDate}>{startDate}</Text>
        <Text style={styles.endDate}>{endDate}</Text>
      </View>
    </View>
  )
}

export default TripPreview;

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    padding: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: 5
  },
  cities: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})