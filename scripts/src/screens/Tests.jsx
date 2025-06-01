/* eslint-disable no-unused-vars */
import { global } from '../assets/styles/global/globalStyle';
import { getMessages } from '../utils/messages';
import { addAppointment, getAppointments, getAppointmentsLength, getAppointmentsWithDate, useAppointments } from '../utils/appointments';
import { getItemFromStorage, removeItemFromStorage, saveToStorage } from '../utils/storage';
import { getAllSchedulings } from '../utils/scheduling_db';
import { getUserInfos } from '../utils/user_db';
import { useUserInfo } from '../hooks/useUserInfo';
import { Button, FlatList, Text, View } from 'react-native';
import cleanApp from '../utils/cleaner';
import { query } from '../helpers/db';

export default function Tests() {
    const { name, enterprise_name, image_uri } = useUserInfo() || {};
    const appointments = useAppointments();

    return (
        <View style={global.container}>
            <Text style={global.text}>Tela de Testes</Text>
            <Button
                title="Run"
                onPress={async () => {
                    const appointmentsWithDate = await getAppointmentsWithDate("01/06");
                    const { months, today } = appointmentsWithDate;

                    console.log(months);
                }}
            />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Reset" onPress={() => {
                    removeItemFromStorage('hasSeenRegister');
                    removeItemFromStorage('hasSeenOnboarding');
                    cleanApp();

                    console.log('App resetado');
                }} />
                <Button
                    title='Select All alguma coisa'
                    onPress={() => {
                        console.log(query('SELECT * FROM user_infos'));
                        console.log(query('SELECT * FROM scheduling_models'));
                    }}
                />
                <Button title="Drop table" onPress={() => query('DROP TABLE scheduling_models')} />
            </View>
        </View>
    );
}