/* eslint-disable no-unused-vars */
import { global } from '../assets/styles/global/globalStyle';
import { getMessages } from '../utils/messages';
import { addAppointment, getAppointments, getAppointmentsLength, getAppointmentsWithDate, useAppointments } from '../utils/appointments';
import { getItemFromStorage, removeItemFromStorage, saveToStorage } from '../utils/storage';
import { getAllProcedures } from '../utils/scheduling_db';
import { editUserInfos, getUserInfos } from '../utils/user_db';
import { useUserInfo } from '../hooks/useUserInfo';
import { Button, FlatList, Text, View } from 'react-native';
import cleanApp from '../utils/cleaner';
import { query, selectAll, updateRow } from '../helpers/db';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSettings } from '../hooks/useSettings';
import { getDateInFull } from '../utils/date';

export default function Tests() {
    const { name, enterprise_name } = useUserInfo() || {};
    const appointments = getAppointments();
    const settings = useSettings();

    return (
        <View style={global.container}>
            <Text style={global.text}>Tela de Testes</Text>
            <Button
                title="Run"
                onPress={async () => {
                    console.log(await appointments);
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
                    title='Select All from all'
                    onPress={() => {
                        console.log(query('SELECT * FROM user_infos'));
                        console.log(query('SELECT * FROM scheduling_models'));
                    }}
                />

                <Button
                    title='Select All keys'
                    onPress={async () => {
                        console.log(await AsyncStorage.getAllKeys());
                        console.log(await getItemFromStorage('settings'));
                    }}
                />
                <Button title="Drop table" onPress={() => query('DROP TABLE scheduling_models')} />
            </View>
        </View>
    );
}