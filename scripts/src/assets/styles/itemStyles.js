import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const itemStyles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width * 0.8,
        height: height * 0.5,
        resizeMode: 'contain',
    },
    titleSlide: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16,
    },
});