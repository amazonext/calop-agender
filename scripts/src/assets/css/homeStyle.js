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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
    },
    calendarIcon: {
        width: 86,
        height: 86,
        borderWidth: 5,
        borderColor: currentMonth().color + "90",
        backgroundColor: currentMonth().color,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    date: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: projectPalete.color7,
    },
    dateInfo: {
        alignItems: 'center',
    },
    dateTitle: {
        fontSize: 30,
        fontWeight: '500',
        color: projectPalete.color8,
        marginBottom: 5,
    },
    appointments: {
        fontSize: 22,
        color: projectPalete.color8,
    },
});