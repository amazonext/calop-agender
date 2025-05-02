import { StyleSheet } from 'react-native';
import { commonStyles } from './global/global';
import { projectPalete } from './colors';

export const addSchedulingStyles = StyleSheet.create({
    ...commonStyles,
    titleItem: {
        fontSize: 30,
        textAlign: 'center',
        color: projectPalete.color3,
        fontWeight: 'bold',
        padding: 5,
    },
    field: {
        fontSize: 20,
        color: "black",
        padding: 5,
        gap: 2,
    },
    label: {
        fontSize: 20,
        color: projectPalete.color10,
    },
    input: {
        backgroundColor: projectPalete.color1,
        borderRadius: 10,
        color: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    content: {
        backgroundColor: "#F4ECDD",
        borderRadius: 15,
    },
});