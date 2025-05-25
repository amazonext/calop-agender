import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';
import { global } from './global/globalStyle';

export const settingsStyles = StyleSheet.create({
    ...global,

    userBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 12,
        marginBottom: 20,
        marginVertical: 15,
    },
    userPhoto: {
        width: 60,
        height: 60,
        borderRadius: 30,
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
    toastContainer: {
        position: 'absolute',
        bottom: 50,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: 'center',
    },
    toastText: {
        color: '#222',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
    }
});