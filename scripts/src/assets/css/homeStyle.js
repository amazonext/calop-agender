import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';
import { currentMonth } from '../../utils/date';

export const homeStyles = StyleSheet.create({
    ...global,
    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    welcomeText: {
        fontSize: 36,
        fontWeight: '600',
        color: projectPalete.color8,
        marginBottom: 10,
        textAlign: 'center'
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
        flex: 1,
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
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 30,
        paddingHorizontal: 15,
    },
    summaryTitle: {
        fontSize: 28,
        fontWeight: '600',
        color: projectPalete.color8,
        marginBottom: 20,
        textAlign: 'center',
    },
    summaryCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    summaryCard: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardNumber: {
        fontSize: 36,
        fontWeight: 'bold',
        color: currentMonth().color,
        marginBottom: 8,
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: projectPalete.color8,
        textAlign: 'center',
        marginBottom: 10,
    },
    todayServicesContainer: {
        alignItems: 'flex-start',
        width: '100%',
    },
    serviceItem: {
        fontSize: 14,
        color: projectPalete.color8,
        marginBottom: 4,
        paddingLeft: 5,
    },
    noServicesText: {
        fontSize: 14,
        color: projectPalete.color8,
        fontStyle: 'italic',
        textAlign: 'center',
        width: '100%',
    },
    tipContainer: {
        marginTop: 25,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tipText: {
        fontSize: 16,
        color: projectPalete.color8,
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: 22,
    },
});