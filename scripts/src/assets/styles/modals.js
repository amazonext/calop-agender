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
        shadowColor: projectPalete.color1,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 15
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 35
    },
    headerIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: projectPalete.color1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginTop: 5
    },
    pickersContainer: {
        gap: 20
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
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 35
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
        shadowColor: projectPalete.color1,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8
    },
    confirmButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    dropdownContainer: {
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
});

export { createScheduling, settings };