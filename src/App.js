import React from 'react';
import Routes from './routes';
import { StatusBar, BackHandler } from 'react-native';

const App = ({ navigation }) => {

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
