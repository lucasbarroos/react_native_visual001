import React from 'react';
import { ScrollView, Text } from 'react-native';
import backHandler from '../../utils/Services/BackHandler';
import { Container, Post, PostImage, PostDescription } from './styles';

export default function Travel({ navigation }) {
    backHandler(navigation, 'Main');
    const data = navigation.getParam('data');

    const headerShadow = {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
    };

    return (
        <Container>
            <ScrollView>
                {
                    data.images.map(element => {
                        return (
                            <Post>
                                <PostImage source={{ uri: element.uri }} />
                                <PostDescription>{element.description}</PostDescription>
                            </Post>
                        );
                    })
                }
            </ScrollView>
        </Container>
    );
}; 