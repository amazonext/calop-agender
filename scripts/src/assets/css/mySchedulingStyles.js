import { StyleSheet } from 'react-native';
import { commonStyles } from './global/global';
import { projectPalete } from './colors';

export const mySchedulingStyles = StyleSheet.create({
    ...commonStyles,

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
});