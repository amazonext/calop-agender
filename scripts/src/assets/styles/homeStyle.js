import { StyleSheet } from 'react-native';
import { global } from './global/globalStyle';
import { projectPalete } from './colors';
import { getCurrentMonth, getCurrentWeekday } from '../../utils/date';

export const homeStyles = StyleSheet.create({
    ...global,
    welcomeTextUser: {
        fontSize: 36,
        color: projectPalete.color8,
        marginBottom: 10,
        textAlign: 'center'
    },
    welcomeTextEnterprise: {
        fontSize: 26,
        fontWeight: '400',
        color: projectPalete.color8,
        marginBottom: 10,
    },
    subtitleText: {
        fontSize: 26,
        color: projectPalete.color8,
    },
    appointmentContainer: {
        flex: 1,
        marginTop: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    calendarIcon: {
        width: 86,
        height: 86,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,

        boxShadow: '0 1px 1px'
    },
    weekTextBefore: {
        fontSize: 30,
        color: projectPalete.color8
    },
    weekText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        color: getCurrentWeekday().color,
    },
    dateInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    message: {
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 5,
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
        backgroundColor: '#FFF',
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
        color: getCurrentMonth().color,
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    serviceItem: {
        fontSize: 14,
        color: projectPalete.color8,
        marginBottom: 4,
        paddingLeft: 5,
        alignItems: 'center',
    },
    servicesText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: getCurrentMonth().color,
        marginBottom: 8,
    },
    tipContainer: {
        marginTop: 25,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
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