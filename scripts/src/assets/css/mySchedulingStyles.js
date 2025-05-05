import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';

export const mySchedulingStyles = StyleSheet.create({
    ...global,

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: projectPalete.color3,
        textAlign: 'center',
        marginVertical: 20,
    },
    content: {
        padding: 20,
        backgroundColor: projectPalete.color1,
        borderRadius: 12,
        marginHorizontal: 16,
    },
    input: {
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    }
});