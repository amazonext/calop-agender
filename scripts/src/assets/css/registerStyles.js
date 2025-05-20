import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';
import { global } from './global/globalStyle';

export const registerStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: projectPalete.color6,
        padding: 25,
    },
    container: {
        ...global.container,
        justifyContent: 'space-between',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        gap: 10
    },
    title: {
        ...global.title,
        marginTop: 0,
        marginBottom: 30,
        textAlign: 'center',
        color: projectPalete.color10
    },
    input: {
        height: 40,
        borderColor: 'transparent',
        borderRadius: 15,
        backgroundColor: projectPalete.color1,
        color: '#fff',
        borderWidth: 1,
        paddingLeft: 8,
    },
    imagePickerButton: {
        backgroundColor: projectPalete.color9,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    cameraButton: {
        borderStyle: 'dashed',
        borderColor: projectPalete.color3,
        borderWidth: 4,

        justifyContent: 'center',
        alignItems: 'center',

        height: 300,
        width: '100%',

        borderRadius: 5,
    },
    cameraText: {
        ...global.text,
        color: projectPalete.color3,
        fontSize: 20,
        marginTop: 10,
    },
    footer: {
        paddingBottom: 20,
    },
    laterText: {
        ...global.text,
        color: '#fff',
    },
});