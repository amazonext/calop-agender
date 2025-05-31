import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';

export const mySchedulingStyles = StyleSheet.create({
    ...global,
    container: {
        flex: 1,
        padding: 20
    },
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
    },
    addScheduling: {
        position: 'absolute',
        height: 60,
        width: 60,
        right: 20,
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: projectPalete.color6,
        zIndex: 100
    },
    noSchedulingContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noSchedulingText: {
        justifyContent: 'center',
        fontSize: 18,
        color: '#00000050'
    }
});