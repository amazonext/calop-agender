import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from "react";
import { Modal, Text, View, TouchableOpacity, FlatList } from "react-native";
import { createScheduling } from '../assets/styles/modals';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

// components
import ServiceItem from '../components/ServiceItem';

// utils
import { getAllSchedulings } from '../utils/scheduling_db';
import { addAppointment } from '../utils/appointments';

export default function ModalCreateScheduling({ modalVisible, setModalVisible }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);
    const [description, setDescription] = useState(null);

    const [date, setDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
    });
    const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
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

    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isServiceDropdownVisible, setIsServiceDropdownVisible] = useState(false);

    useEffect(() => {
        if (modalVisible) {
            const schedulings = getAllSchedulings();
            setServices(schedulings);
            setSelectedService(null);
        }
    }, [modalVisible]);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={createScheduling.modalOverlay}>
                <View style={createScheduling.modalContainer}>
                    <View style={createScheduling.headerSection}>
                        <Text style={createScheduling.headerTitle}>Novo Agendamento</Text>
                        <Text style={createScheduling.headerSubtitle}>Selecione a data, o horário e o serviço</Text>
                    </View>

                    <View style={createScheduling.pickersContainer}>
                        <View>
                            <Text style={createScheduling.labelInput}>Data</Text>
                            <TouchableOpacity
                                style={createScheduling.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowHourPicker(false);
                                    setShowDatePicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={createScheduling.dateTimePickerIconContainer}>
                                    <Ionicons name="calendar-outline" size={22} color="#fff" />
                                </View>
                                <View style={createScheduling.dateTimePickerTextContainer}>
                                    <Text style={createScheduling.dateTimePickerValueText}>{dateFormatted}</Text>
                                    <Text style={createScheduling.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={createScheduling.labelInput}>Horário</Text>
                            <TouchableOpacity
                                style={createScheduling.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowDatePicker(false);
                                    setShowHourPicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={createScheduling.dateTimePickerIconContainer}>
                                    <AntDesign name="clockcircleo" size={20} color="#fff" />
                                </View>
                                <View style={createScheduling.dateTimePickerTextContainer}>
                                    <Text style={createScheduling.dateTimePickerValueText}>{hourFormatted}</Text>
                                    <Text style={createScheduling.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View style={createScheduling.dropdownContainer}>
                            <Text style={createScheduling.labelInput}>Serviço</Text>
                            <TouchableOpacity
                                style={createScheduling.dropdownButton}
                                onPress={() => {
                                    if (services.length > 0) {
                                        setShowDatePicker(false);
                                        setShowHourPicker(false);
                                        setIsServiceDropdownVisible(!isServiceDropdownVisible);
                                    }
                                }}
                                activeOpacity={services.length > 0 ? 0.7 : 1}
                            >
                                <Text style={createScheduling.dropdownButtonText}>
                                    {selectedService?.name || (services?.length ? 'Escolha um serviço' : 'Nenhum serviço disponível')}
                                </Text>
                                {services.length > 0 && (
                                    <Ionicons
                                        name={isServiceDropdownVisible ? "chevron-up" : "chevron-down"}
                                        size={22}
                                        color="#666"
                                    />
                                )}
                            </TouchableOpacity>
                            {isServiceDropdownVisible && services.length > 0 && (
                                <View style={createScheduling.dropdownList}>
                                    <FlatList
                                        data={services}
                                        renderItem={({ item, index }) => (
                                            <ServiceItem
                                                item={item}
                                                index={index}
                                                servicesLength={services.length}
                                                onSelect={selected => {
                                                    setSelectedService(selected);
                                                    setIsServiceDropdownVisible(false);
                                                }}
                                            />
                                        )}
                                        keyExtractor={(item, index) => item.key_identifier || index.toString()}
                                    />
                                </View>
                            )}
                        </View>

                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                onChange={(event, selectedDateValue) => {
                                    setShowDatePicker(false);
                                    if (selectedDateValue) setDate(selectedDateValue);
                                }}
                            />
                        )}

                        {showHourPicker && (
                            <DateTimePicker
                                value={hour}
                                mode="time"
                                is24Hour={true}
                                onChange={(event, selectedTime) => {
                                    setShowHourPicker(false);
                                    if (selectedTime) setHour(selectedTime);
                                }}
                            />
                        )}

                        <View>
                            <Text style={createScheduling.labelInput}>Descrição</Text>

                            <TouchableOpacity
                                style={createScheduling.descriptionButton}
                            >
                                <View style={createScheduling.descriptionIconContainer}>
                                    <Entypo name="text" size={20} color="#fff" />
                                </View>
                                <View style={createScheduling.descriptionTextContainer}>
                                    <Text style={createScheduling.descriptionValueText}>Sem descrição</Text>
                                    <Text style={createScheduling.descriptionHelpText}>Toque para alterar</Text>
                                </View>

                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={createScheduling.buttonsRow}>
                        <TouchableOpacity
                            style={createScheduling.cancelButton}
                            onPress={() => setModalVisible(false)}
                            activeOpacity={0.8}
                        >
                            <Text style={createScheduling.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={createScheduling.confirmButton}
                            onPress={() => {
                                if (!selectedService) {
                                    alert('Por favor, selecione um serviço antes de continuar.');
                                    return;
                                }

                                const formattedDate = dateFormatted.replace("/", "_");
                                addAppointment(formattedDate, hourFormatted, selectedService);

                                setModalVisible(false);
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={createScheduling.confirmButtonText}>Criar Agendamento</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}