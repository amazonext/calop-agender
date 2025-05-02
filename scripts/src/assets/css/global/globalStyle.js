import { StyleSheet } from 'react-native';
import { projectPalete } from '../colors';

export const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: projectPalete.color2,
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 30,
        alignItems: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 20,
        backgroundColor: projectPalete.color6,
    },
    title: {
        fontSize: 36,
        fontWeight: '600',
        color: projectPalete.color8,
        marginTop: 10,
        marginBottom: 30,
    },
    button: {
        alignItems: 'center',
        fontSize: 20,
        padding: 5,
        backgroundColor: projectPalete.color6,
        borderRadius: 10,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16,
    }
});