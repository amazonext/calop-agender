import { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// components
import ModalCreateScheduling from '../components/ModalCreateScheduling';

// utils
import { addEvent } from '../utils/calendar';

// styles
import { mySchedulingStyles } from "../assets/css/mySchedulingStyles";
import { projectPalete } from '../assets/css/colors';

export default function MySchedulings() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={mySchedulingStyles.container}>
            <View>
                <Text>Agendamentos pendentes(nº)</Text>
            </View>

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