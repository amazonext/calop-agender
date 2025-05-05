import { useState, useEffect } from 'react';
import { View, Button, Alert, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addEvent, debugListCalendars } from '../utils/calendar';

// styles
import { mySchedulingStyles } from "../assets/css/mySchedulingStyles";

export default function MySchedulings() {
    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    useEffect(() => {
        debugListCalendars();
    }, []);

    const handleAddEvent = async () => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const hourStart = startTime.getHours();
        const minuteStart = startTime.getMinutes();
        const hourEnd = endTime.getHours();
        const minuteEnd = endTime.getMinutes();

        const response = await addEvent({
            title: 'Reunião com equipe',
            description: 'Discutir metas do projeto',
            day,
            month,
            hourStart,
            hourEnd,
            minuteStart,
            minuteEnd,
        });

        Alert.alert('Resultado', response || 'Nenhuma resposta');
    };

    const showPicker = (mode, picker) => {
        if (picker === 'date') setShowDatePicker(true);
        else if (picker === 'start') setShowStartTimePicker(true);
        else if (picker === 'end') setShowEndTimePicker(true);
    };

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) setDate(selectedDate);
    };

    const onChangeStartTime = (event, selectedTime) => {
        setShowStartTimePicker(Platform.OS === 'ios');
        if (selectedTime) setStartTime(selectedTime);
    };

    const onChangeEndTime = (event, selectedTime) => {
        setShowEndTimePicker(Platform.OS === 'ios');
        if (selectedTime) setEndTime(selectedTime);
    };

    return (
        <View style={mySchedulingStyles.container}>
            <Text>Tela de Meus agendamentos</Text>
        </View>
    )
}