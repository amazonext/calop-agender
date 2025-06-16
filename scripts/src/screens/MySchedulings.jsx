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
import { useSettings } from '../hooks/useSettings';

// styles
import { mySchedulingStyles } from "../assets/styles/mySchedulingStyles";
import { projectPalete } from '../assets/styles/colors';

export default function MySchedulings() {
    const [modalVisible, setModalVisible] = useState(false);
    const [appointments, setAppointments] = useState({});

    const settings = useSettings();

    const fetchAppointments = async () => {
        const data = await getAppointments();
        setAppointments(data);
    };

    const { refreshing, onRefresh: handleRefresh } = useRefresh(fetchAppointments);

    useEffect(() => {
        fetchAppointments();
    }, []);

    if (appointments === null || !settings) return <Loading />;

    const dateInFullValue = settings.dateInFull;

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[projectPalete.color1]}
                        tintColor={projectPalete.color1}
                        progressViewOffset={5}
                    />
                }
            >
                {
                    appointments && Object.values(appointments).flat().length > 0 ? (
                        <View style={{ padding: 20 }}>
                            <Appointments data={appointments} dateInFull={dateInFullValue} />
                        </View>
                    ) : (
                        <View style={mySchedulingStyles.noSchedulingContent}>
                            <Text style={mySchedulingStyles.noSchedulingText}>
                                Você não tem agendamentos pendentes
                            </Text>
                        </View>
                    )
                }
            </ScrollView>

            <TouchableOpacity
                style={mySchedulingStyles.addScheduling}
                activeOpacity={0.8}
                onPress={() => setModalVisible(true)}
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