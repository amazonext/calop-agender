import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from "react";
import { Modal, Text, View, TouchableOpacity, FlatList } from "react-native";
import { createProcedure } from '../assets/styles/modals';
import { Ionicons, AntDesign } from '@expo/vector-icons';

// components
import ServiceItem from '../components/ServiceItem';

// utils
import { getAllProcedures } from '../utils/scheduling_db';
import { addAppointment } from '../utils/appointments';
// import { addEvent } from '../utils/calendar';

export default function ModalcreateProcedure({ modalVisible, setModalVisible }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);
    // const [description, setDescription] = useState(null);

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
            const schedulings = getAllProcedures();
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
            <View style={createProcedure.modalOverlay}>
                <View style={createProcedure.modalContainer}>
                    <View style={createProcedure.headerSection}>
                        <Text style={createProcedure.headerTitle}>Novo Agendamento</Text>
                        <Text style={createProcedure.headerSubtitle}>Defina a data, o horário e o serviço</Text>
                    </View>

                    <View style={createProcedure.pickersContainer}>
                        <View>
                            <Text style={createProcedure.labelInput}>Data</Text>
                            <TouchableOpacity
                                style={createProcedure.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowHourPicker(false);
                                    setShowDatePicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={createProcedure.dateTimePickerIconContainer}>
                                    <Ionicons name="calendar-outline" size={22} color="#fff" />
                                </View>
                                <View style={createProcedure.dateTimePickerTextContainer}>
                                    <Text style={createProcedure.dateTimePickerValueText}>{dateFormatted}</Text>
                                    <Text style={createProcedure.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={createProcedure.labelInput}>Horário</Text>
                            <TouchableOpacity
                                style={createProcedure.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowDatePicker(false);
                                    setShowHourPicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={createProcedure.dateTimePickerIconContainer}>
                                    <AntDesign name="clockcircleo" size={20} color="#fff" />
                                </View>
                                <View style={createProcedure.dateTimePickerTextContainer}>
                                    <Text style={createProcedure.dateTimePickerValueText}>{hourFormatted}</Text>
                                    <Text style={createProcedure.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View style={createProcedure.dropdownContainer}>
                            <Text style={createProcedure.labelInput}>Serviço</Text>

                            <TouchableOpacity
                                style={createProcedure.dropdownButton}
                                onPress={() => {
                                    if (services.length > 0) {
                                        setShowDatePicker(false);
                                        setShowHourPicker(false);
                                        setIsServiceDropdownVisible(!isServiceDropdownVisible);
                                    }
                                }}
                                activeOpacity={services.length > 0 ? 0.7 : 1}
                            >
                                <Text style={createProcedure.dropdownButtonText}>
                                    {selectedService?.procedure || (services?.length ? 'Escolha um serviço' : 'Nenhum serviço disponível')}
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
                                <View style={createProcedure.dropdownList}>
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

                        {/* <View>
                            <Text style={createProcedure.labelInput}>Descrição</Text>

                            <TouchableOpacity style={createProcedure.descriptionButton}>
                                <View style={createProcedure.descriptionIconContainer}>
                                    <Entypo name="text" size={20} color="#fff" />
                                </View>
                                <View style={createProcedure.descriptionTextContainer}>
                                    <Text style={createProcedure.descriptionValueText}>Sem descrição</Text>
                                    <Text style={createProcedure.descriptionHelpText}>Toque para alterar</Text>
                                </View>

                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View> */}
                    </View>

                    <View style={createProcedure.buttonsRow}>
                        <TouchableOpacity
                            style={createProcedure.cancelButton}
                            onPress={() => setModalVisible(false)}
                            activeOpacity={0.8}
                        >
                            <Text style={createProcedure.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={createProcedure.confirmButton}
                            onPress={() => {
                                if (!selectedService) {
                                    alert('Por favor, selecione um serviço antes de continuar.');
                                    return;
                                }

                                const formattedDate = dateFormatted.replace("/", "_");
                                addAppointment(formattedDate, hourFormatted, selectedService);
                                // TODO: terminar de adicionar as propriedades do objeto
                                // addEvent({ title: services.procedure, notes: services.detailing });

                                setModalVisible(false);
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={createProcedure.confirmButtonText}>Criar Agendamento</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}