import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';
import { global } from './global/globalStyle';

export const registerStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: projectPalete.color6,
    },
    container: {
        ...global.container,
        justifyContent: 'space-between',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    title: {
        ...global.title,
        marginTop: 0,
        marginBottom: 30,
        textAlign: 'center',
        color: projectPalete.color10
    },
    imagePickerButton: {
        backgroundColor: projectPalete.color9,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    photoButton: {
        borderColor: projectPalete.color3,
        borderStyle: 'dashed',
        borderWidth: 5,
        alignItems: 'center',
        borderRadius: 500,
        padding: 25,
        height: 225,
        width: 225,
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
        paddingTop: 25,
        paddingBottom: 60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: projectPalete.color11
    },
    inputsGroup: {
        marginBottom: 30,
        gap: 15
    },
    inputs: {
        gap: 10
    },
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