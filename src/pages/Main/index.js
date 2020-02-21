/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Container, Card, PageTitle, CardDetails } from './styles';

export default function Main({ navigation }) {
  const travels = [{
    _id: '1',
    location: 'Italy',
    uri: 'https://cstad.s3-ap-southeast-2.amazonaws.com/3146_Taste_Of_Italy_web_hero.jpg',
    date: '11/JAN/2020',
    images: [{
      uri: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170606121206-italy---travel-destination---shutterstock-517522957.jpg',
      description: 'Wonderful place'
    }, {
      uri: 'https://travelalligator.com/wp-content/uploads/2019/06/italy-travel-tips.jpg',
      description: 'Amazing experience'
    }, {
      uri: 'https://cstad.s3-ap-southeast-2.amazonaws.com/3146_Taste_Of_Italy_web_hero.jpg',
      description: 'The paradise'
    }
    ]
  },
  {
    _id: '2',
    location: 'Germany',
    uri: 'https://www.tripsavvy.com/thmb/tnJ_frn5LmRMCxPzUd36wf7AExs=/3826x2603/filters:fill(auto,1)/christmas-market-weihnachtsmarkt-frauenkirche-n-rnberg-nuremberg-bavaria-germany-140337546-58f4c2523df78cd3fc1049d1.jpg',
    date: '21/JAN/2020',
    images: [{
      uri: 'https://pix10.agoda.net/geo/country/101/3_101_germany_02.jpg?s=1920x',
      description: 'OMG!'
    }, {
      uri: 'https://www.studying-in-germany.org/wp-content/uploads/2018/07/German-Culture-and-Traditions-696x464.jpg',
      description: 'I´ll never forget it'
    }]
  }];

  return (
    <Container>
      <FlatList
        data={travels}
        renderItem={({ item }) => (
          <Card source={{ uri: item.uri }} imageStyle={{ borderRadius: 10 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Travel', { data: item }) }} style={{ position: 'relative', height: '100%', width: '100%' }}>
              <PageTitle>{item.location}</PageTitle>
              <CardDetails>{item.date}</CardDetails>
            </TouchableOpacity>
          </Card>
        )}
      />
    </Container>
  );
}
