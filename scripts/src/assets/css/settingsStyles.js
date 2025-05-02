import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';

export const settingsStyles = StyleSheet.create({
    userBox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 12,
        marginBottom: 20,
        marginVertical: 15,
    },
    userPhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: projectPalete.color6,
        padding: 16,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 12,
    },
    buttonText: {
        color: projectPalete.color8,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});