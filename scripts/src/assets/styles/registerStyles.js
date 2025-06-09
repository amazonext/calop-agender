import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';
import { global } from './global/globalStyle';

export const registerStyles = StyleSheet.create({
    ...global,
    safeArea: {
        flex: 1,
        backgroundColor: projectPalete.color6,
        justifyContent: 'center'
    },
    container: {
        ...global.container,
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        ...global.title,
        marginTop: 0,
        marginBottom: 30,
        textAlign: 'center',
        color: projectPalete.color10
    },
    imagePickerButton: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    photoButton: {
        borderColor: projectPalete.color3,
        borderStyle: 'dashed',
        borderWidth: 5,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    photoText: {
        ...global.text,
        color: projectPalete.color3,
        fontSize: 20,
        marginTop: 15,
    },
    form: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 30,
        backgroundColor: projectPalete.color11,
        gap: 40
    },
    inputsGroup: {
        gap: 15
    },
    inputs: { gap: 10 },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: projectPalete.color3
    },
    inputAndIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#000"
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: projectPalete.color12,
        color: projectPalete.color10,
        borderColor: projectPalete.color10,
        borderWidth: 1,
        borderRightWidth: 0
    },
    input: {
        flexGrow: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: projectPalete.color13,
        color: '#fff',
        borderColor: projectPalete.color10,
        borderWidth: 1,
        borderLeftWidth: 0
    },
    buttonRegister: {
        borderWidth: 2,
        borderRadius: 100,
    }
});