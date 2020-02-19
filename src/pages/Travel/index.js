import React from 'react';
import { ScrollView, Text } from 'react-native';
import backHandler from '../../utils/Services/BackHandler';
import { Container, Header, PageTitle, PageDetails, PageDetailsText, Icon, Post, PostImage, PostDescription } from './styles';
import imageIcon from '../../assets/icons/ui.png';
import calendarIcon from '../../assets/icons/calendar.png';
import heartIcon from '../../assets/icons/heart.png';

export default function Travel({ navigation }) {
    backHandler(navigation, 'Main');
    const data = navigation.getParam('data');

    return (
        <Container>
            <Header source={{ uri: data.uri }}>
                <PageTitle>{data.location}</PageTitle>
                <PageDetails>
                    <PageDetailsText>
                        <Icon source={calendarIcon} />
                    </PageDetailsText>
                    <PageDetailsText>
                        <Icon source={imageIcon} />
                    </PageDetailsText>
                    <PageDetailsText>
                        <Icon source={heartIcon} />
                    </PageDetailsText>
                </PageDetails>
            </Header>
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