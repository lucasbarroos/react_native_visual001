/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Card, PageTitle, CardDetails } from './styles';

export default function Main({ navigation }) {
  const image =
    'https://cstad.s3-ap-southeast-2.amazonaws.com/3146_Taste_Of_Italy_web_hero.jpg';
  const image2 =
    'https://www.tripsavvy.com/thmb/tnJ_frn5LmRMCxPzUd36wf7AExs=/3826x2603/filters:fill(auto,1)/christmas-market-weihnachtsmarkt-frauenkirche-n-rnberg-nuremberg-bavaria-germany-140337546-58f4c2523df78cd3fc1049d1.jpg';

  return (
    <Container>
      <Card source={{ uri: image }} imageStyle={{ borderRadius: 20 }} onPress={() => alert('Touched')}>
        <TouchableOpacity onPress={() => { navigation.navigate('Travel') }} style={{ position: 'relative', height: '100%', width: '100%' }}>
          <PageTitle>Italy</PageTitle>
          <CardDetails>11/JAN/2020</CardDetails>
        </TouchableOpacity>
      </Card>
      <Card source={{ uri: image2 }} imageStyle={{ borderRadius: 20 }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Travel') }} style={{ position: 'relative', height: '100%', width: '100%' }}>
          <PageTitle>Germany</PageTitle>
          <CardDetails>03/FEV/2020</CardDetails>
        </TouchableOpacity>
      </Card>
    </Container>
  );
}
