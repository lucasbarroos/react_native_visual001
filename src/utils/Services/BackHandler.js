import { BackHandler } from 'react-native';

export default function backHandler(navigation, route) {
    BackHandler.addEventListener('backPress', () => {
        navigation.navigate(route);
        return true;
    });
};
