import DateTimePicker from '@react-native-community/datetimepicker';
import { useState, useEffect } from "react";
import { Modal, Text, View, TouchableOpacity, FlatList } from "react-native";
import styles from '../assets/css/modalcreateschedulingStyle';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { projectPalete } from '../assets/css/colors';

export default function ModalCreateScheduling({ modalVisible, setModalVisible }) {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showHourPicker, setShowHourPicker] = useState(false);

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
            setServices([]);
            setSelectedService(null);
        }
    }, [modalVisible]);

    const renderServiceItem = ({ item, index }) => (
        <TouchableOpacity
            style={[
                styles.dropdownItem,
                index === services.length - 1 ? styles.lastDropdownItem : {}
            ]}
            onPress={() => {
                setSelectedService(item);
                setIsServiceDropdownVisible(false);
            }}
        >
            <Text style={styles.dropdownItemText}>{item.name || item}</Text>
        </TouchableOpacity>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.headerSection}>
                        <View style={styles.headerIconContainer}>
                            <Ionicons name="calendar" size={28} color="#fff" />
                        </View>
                        <Text style={styles.headerTitle}>Novo Agendamento</Text>
                        <Text style={styles.headerSubtitle}>Selecione a data, horário e serviço</Text>
                    </View>

                    <View style={styles.pickersContainer}>
                        <View>
                            <Text style={styles.labelInput}>Data</Text>
                            <TouchableOpacity
                                style={styles.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowHourPicker(false);
                                    setShowDatePicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={styles.dateTimePickerIconContainer}>
                                    <Ionicons name="calendar-outline" size={22} color="#fff" />
                                </View>
                                <View style={styles.dateTimePickerTextContainer}>
                                    <Text style={styles.dateTimePickerValueText}>{dateFormatted}</Text>
                                    <Text style={styles.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.labelInput}>Horário</Text>
                            <TouchableOpacity
                                style={styles.dateTimePickerButton}
                                onPress={() => {
                                    setIsServiceDropdownVisible(false);
                                    setShowDatePicker(false);
                                    setShowHourPicker(true);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={styles.dateTimePickerIconContainer}>
                                    <AntDesign name="clockcircleo" size={20} color="#fff" />
                                </View>
                                <View style={styles.dateTimePickerTextContainer}>
                                    <Text style={styles.dateTimePickerValueText}>{hourFormatted}</Text>
                                    <Text style={styles.dateTimePickerHelpText}>Toque para alterar</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dropdownContainer}>
                            <Text style={styles.labelInput}>Serviço</Text>
                            <TouchableOpacity
                                style={styles.dropdownButton}
                                onPress={() => {
                                    if (services.length > 0) {
                                        setShowDatePicker(false);
                                        setShowHourPicker(false);
                                        setIsServiceDropdownVisible(!isServiceDropdownVisible);
                                    }
                                }}
                                activeOpacity={services.length > 0 ? 0.7 : 1}
                            >
                                <Text style={styles.dropdownButtonText}>
                                    {(selectedService && (selectedService.name || selectedService)) || 'Nenhum serviço disponível'}
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
                                <View style={styles.dropdownList}>
                                    <FlatList
                                        data={services}
                                        renderItem={renderServiceItem}
                                        keyExtractor={(item, index) => item.id || index.toString()}
                                        nestedScrollEnabled={true}
                                    />
                                </View>
                            )}
                        </View>

                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
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
                                display="default"
                                is24Hour={true}
                                onChange={(event, selectedTime) => {
                                    setShowHourPicker(false);
                                    if (selectedTime) setHour(selectedTime);
                                }}
                            />
                        )}
                    </View>

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => {
                                console.log('Data:', dateFormatted);
                                console.log('Hora:', hourFormatted);
                                console.log('Serviço:', selectedService);
                                setModalVisible(false);
                            }}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.confirmButtonText}>Criar Agendamento</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}