import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { projectPalete } from '../assets/styles/colors';

export default function ModalService({ visible, service, onChange, onCancel, onSave }) {
    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Editar Serviço</Text>

                    <TextInput
                        style={styles.modalInput}
                        value={service?.procedure}
                        onChangeText={(text) => onChange('procedure', text)}
                        placeholder="Procedimento"
                        placeholderTextColor="#ccc"
                    />
                    <TextInput
                        style={styles.modalInput}
                        value={service?.profissional_name}
                        onChangeText={(text) => onChange('profissional_name', text)}
                        placeholder="Profissional"
                        placeholderTextColor="#ccc"
                    />
                    <TextInput
                        style={styles.modalInput}
                        value={String(service?.price)}
                        onChangeText={(text) => onChange('price', parseFloat(text))}
                        placeholder="Preço"
                        keyboardType="numeric"
                        placeholderTextColor="#ccc"
                    />
                    <TextInput
                        style={[styles.modalInput, { height: 80 }]}
                        value={service?.detailing}
                        onChangeText={(text) => onChange('detailing', text)}
                        placeholder="Detalhamento"
                        multiline
                        placeholderTextColor="#ccc"
                    />

                    <View style={styles.modalButtons}>
                        <Button title="Cancelar" onPress={onCancel} color="#999" />
                        <Button title="Salvar" onPress={onSave} color={projectPalete.color1} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxWidth: 400,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});