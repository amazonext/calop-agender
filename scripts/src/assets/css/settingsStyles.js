import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';
import { global } from './global/globalStyle';

export const settingsStyles = StyleSheet.create({
    ...global,
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
        borderColor: "red",
        borderWidth: 2,
        marginRight: 16,
        backgroundColor: "#888",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
    },
    enterprise: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#666",
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
    section: {
        marginTop: 25,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    infoCard: {
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    infoLabel: {
        fontSize: 14,
        color: '#555',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111',
    },
    linkValue: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: '450'
    },
});
