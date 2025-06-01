import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';

export const addSchedulingStyles = StyleSheet.create({
    ...global,
    container: {
        flex: 1,
        backgroundColor: projectPalete.color2,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        gap: 35,
        paddingBottom: 110
    },
    header: {
        alignItems: 'center',
    },
    titleItem: {
        fontSize: 28,
        textAlign: 'center',
        color: projectPalete.color3,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitleItem: {
        ntSize: 18,
        textAlign: 'center',
        color: projectPalete.color3 + '75',
        fontWeight: '700',
        marginBottom: 8,
    },
    titleUnderline: {
        width: 80,
        height: 3,
        backgroundColor: projectPalete.color6,
        borderRadius: 2,
    },
    formCard: {
        backgroundColor: "#F4ECDD",
        borderRadius: 20,
        padding: 25,
        gap: 20,
        shadowColor: projectPalete.color1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    field: {
        gap: 8,
    },
    label: {
        fontSize: 18,
        color: projectPalete.color10,
        fontWeight: '600',
        marginLeft: 5,
    },
    optionalText: {
        fontSize: 14,
        color: "#00000075",
        fontWeight: '400',
    },
    inputContainer: {
        backgroundColor: projectPalete.color1,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontWeight: '500',
    },
    currencySymbol: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 15,
        paddingTop: 12,
    },
    currencyInput: {
        paddingLeft: 5,
    },
    textArea: {
        minHeight: 80,
        textAlignVertical: 'top',
        paddingTop: 12,
    },
    submitButton: {
        backgroundColor: projectPalete.color6,
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: projectPalete.color6,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    submitButtonDisabled: {
        opacity: .6,
        shadowOpacity: 0,
        elevation: 0,
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    submitButtonTextDisabled: {
        opacity: .6,
    },
});