import React from 'react';
import { Text, BackHandler } from 'react-native';
import backHandler from '../../utils/Services/BackHandler';

export default function Travel({ navigation }) {
    backHandler(navigation, 'Main');

    return (<Text>Hello Travel</Text>);
};