import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import TripPreview from '../TripPreview/TripPreview';

const mockPreviews = [
  {
    id: 1,
    name: 'Spring break',
    startDate: '03-05-2020',
    endDate: '04-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'paris, france',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'PAR'
  },
  {
    id: 2,
    name: 'Summer Roadtrip',
    startDate: '06-05-2020',
    endDate: '07-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Barcelona, spain',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'BRC'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  },
  {
    id: 3,
    name: 'Winter Trip',
    startDate: '11-05-2020',
    endDate: '12-05-2020',
    origin: 'denver, co, usa',
    finalDestination: 'Tokyo, Japan',
    originAbbrev: 'DEN',
    finalDestinationAbbrev: 'TOK'
  }
];

const Trips = () => {
  return (
    <View style={styles.scrollView}>
      <ScrollView>
        {
          mockPreviews.map((preview, index) =>
            <TripPreview
              item={preview}
              key={preview.id}
            />
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    height: 500,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
    width: 180
  },
});

export default Trips;
