import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// components
import ModalCreateScheduling from '../components/ModalCreateScheduling';
import Loading from '../components/Loading';
import Appointments from '../components/Appointments';

// utils
import { getAppointments } from '../utils/appointments';

// hooks
import { useRefresh } from '../hooks/useRefresh';

// styles
import { mySchedulingStyles } from "../assets/styles/mySchedulingStyles";
import { projectPalete } from '../assets/styles/colors';

export default function MySchedulings() {
    const [modalVisible, setModalVisible] = useState(false);
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        const data = await getAppointments();
        setAppointments(data);
    };

    const { refreshing, onRefresh: handleRefresh } = useRefresh(fetchAppointments);

    useEffect(() => {
        fetchAppointments();
    }, []);

    if (appointments === null) return <Loading />;

    return (
        <ScrollView
            contentContainerStyle={mySchedulingStyles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[projectPalete.color1]}
                    tintColor={projectPalete.color1}
                    progressViewOffset={5}
                />
            }
        >
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
        </ScrollView >
    );
}