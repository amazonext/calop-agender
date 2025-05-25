import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Modal, Text, View, Button, Platform, TouchableOpacity } from "react-native";
import { createScheduling } from '../assets/css/ModalsStyles';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { projectPalete } from '../assets/css/colors';

export default function ModalCreateScheduling({ modalVisible, setModalVisible }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [date, setDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
    });
    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit', // remove o ano da formatação
    });
    const dateFormatted = dateFormatter.format(date);

    const [hour, setHour] = useState(() => {
        const h = new Date();
        h.setHours(h.getHours() + 1);
        return h;
    });
    const hourFormatter = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const hourFormatted = hourFormatter.format(hour);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={createScheduling.container}>
                <View style={createScheduling.modalBox}>
                    <Text style={createScheduling.title}>Criar Agendamento</Text>

                    <View style={{
                        gap: 20
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                gap: 5
                            }}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Ionicons
                                name="calendar-number"
                                size={40}
                                color={projectPalete.color1}
                            />
                            <Text style={createScheduling.date}>{dateFormatted}</Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) setDate(selectedDate);
                                }}
                            />
                        )}

                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: 1,
                                gap: 5
                            }}
                            onPress={() => setShowHourPicker(true)}
                        >
                            <AntDesign
                                name="clockcircle"
                                size={37}
                                color={projectPalete.color1}
                            />
                            <Text style={createScheduling.date}>{hourFormatted}</Text>
                        </TouchableOpacity>
                        {showHourPicker && (
                            <DateTimePicker
                                value={hour}
                                mode="time"
                                display={'spinner'}
                                is24Hour={true}
                                onChange={(event, selectedTime) => {
                                    setShowHourPicker(false);
                                    if (selectedTime) setHour(selectedTime);
                                }}
                            />
                        )}
                    </View>

                    <View style={createScheduling.buttonRow}>
                        <Button
                            title="Fechar"
                            onPress={() => setModalVisible(false)}
                            color="#d32f2f"
                        />
                        <Button
                            title="Criar"
                            onPress={() => setModalVisible(false)}
                            color="#d32f2f"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}