import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';

export const homeStyles = StyleSheet.create({
    ...global,
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: '500',
        color: projectPalete.color8,
        marginBottom: 5,
    },
    subtitleText: {
        fontSize: 26,
        color: projectPalete.color8,
    },
    appointmentContainer: {
        flex: 1,
        marginTop: 20,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    calendarIcon: {
        width: 60,
        height: 60,
        borderWidth: 5,
        borderColor: projectPalete.color7,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    dateNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: projectPalete.color7,
    },
    dateInfo: {
        justifyContent: 'center',
    },
    dateTitle: {
        fontSize: 30,
        fontWeight: '500',
        color: projectPalete.color8,
        marginBottom: 5,
    },
    noAppointments: {
        fontSize: 22,
        color: projectPalete.color8,
    },
});