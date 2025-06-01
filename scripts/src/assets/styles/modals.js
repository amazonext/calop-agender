import { StyleSheet } from "react-native";
import { projectPalete } from './colors';

const createScheduling = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 30,
        width: '100%',
        maxWidth: 400,
        gap: 30,
    },
    headerSection: {
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#33333375',
        textAlign: 'center',
        marginTop: 2
    },
    pickersContainer: {
        gap: 20,
    },
    labelInput: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444',
        marginBottom: 10,
        marginLeft: 5
    },
    dateTimePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#e9ecef'
    },
    dateTimePickerIconContainer: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: projectPalete.color1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    dateTimePickerTextContainer: {
        flex: 1
    },
    dateTimePickerValueText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333'
    },
    dateTimePickerHelpText: {
        fontSize: 12,
        color: '#666',
        marginTop: 2
    },
    descriptionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#e9ecef'
    },
    descriptionIconContainer: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: projectPalete.color1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    descriptionContainer: {
        backgroundColor: "#f8f9fa",
        borderColor: '#dee2e6',
        paddingVertical: 18,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    descriptionTextContainer: {
        flex: 1,
    },
    descriptionValueText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333'
    },
    descriptionHelpText: {
        fontSize: 12,
        color: '#666',
        marginTop: 2
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#dee2e6'
    },
    cancelButtonText: {
        textAlign: 'center',
        color: '#6c757d',
        fontSize: 16,
        fontWeight: '600'
    },
    confirmButton: {
        flex: 1,
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: projectPalete.color1,
    },
    confirmButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    dropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#e9ecef',
    },
    dropdownButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        flex: 1,
    },
    dropdownList: {
        marginTop: 8,
        backgroundColor: '#fff',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#e9ecef',
        maxHeight: 150,
    },
    dropdownItem: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f8f9fa',
    },
    dropdownItemText: {
        fontSize: 16,
        color: '#333',
    },
    lastDropdownItem: {
        borderBottomWidth: 0,
    }
});

const settings = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    container: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 12,
    },
    imagePickerText: {
        borderStyle: 'dashed',
        borderColor: projectPalete.color3,
        borderWidth: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 12,
        backgroundColor: '#fafafa',
        color: '#222',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
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
        fontWeight: 'bold',
    },
});

export { createScheduling, settings };