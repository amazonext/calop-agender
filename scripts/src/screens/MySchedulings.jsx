import { useEffect, useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// components
import ModalCreateScheduling from '../components/ModalCreateScheduling';

// utils
import { addEvent } from '../utils/calendar';
import { getAppointments } from '../utils/appointments';

// styles
import { mySchedulingStyles } from "../assets/styles/mySchedulingStyles";
import { projectPalete } from '../assets/styles/colors';

export default function MySchedulings() {
    const [modalVisible, setModalVisible] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAppointments();
            setAppointments(data);
        };

        fetchAppointments();
    }, []);

    return (
        <View style={mySchedulingStyles.container}>
            {
                appointments.length > 0 ? (
                    <View style={mySchedulingStyles.content}>
                        <Text style={mySchedulingStyles.text}>
                            Agendamentos pendentes({appointments.length})
                        </Text>
                    </View>
                ) : (
                        <View style={mySchedulingStyles.noSchedulingContent}>
                        <Text style={mySchedulingStyles.noSchedulingText}>
                            Você não tem agendamentos pendentes
                        </Text>
                    </View>
                )
            }

            <TouchableOpacity
                style={mySchedulingStyles.addScheduling}
                activeOpacity={0.8}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <FontAwesome6
                    name="plus"
                    size={30}
                    color={projectPalete.color2}
                />
            </TouchableOpacity>

            <ModalCreateScheduling
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </View>
    );
}