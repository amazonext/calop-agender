import { View, Text, Alert, StyleSheet, Button } from 'react-native';
import { projectPalete } from '../assets/styles/colors';
import { deleteProcedure } from '../utils/scheduling_db';

// import ModalService from '../components/ModalService';

export default function ServiceList({ data }) {
    // const [modalVisible, setModalVisible] = useState(false);
    // const [editingService, setEditingService] = useState(null);

    const handleDelete = model =>
        Alert.alert('Excluir serviço', 'Deseja realmente Excluir?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: () => deleteProcedure(model.key_identifier) }
        ]);

    // const handleEdit = model => {
    //     setEditingService({ ...model });
    //     setModalVisible(true);
    // };

    // const handleSave = model => {
    //     editProcedure({ ...model }, model.key_identifier);
    //     setModalVisible(false);
    // };

    // const handleChange = (field, value) => setEditingService(prev => ({ ...prev, [field]: value }));;

    return (
        <View>
            {data.map(model => (
                <View key={model.key_identifier} style={styles.modelCard}>
                    <Text style={styles.titleText}>
                        {model.procedure || 'Procedimento não informado'}
                    </Text>

                    <Text style={styles.detailText}>
                        Profissional: {model.profissional_name || '...'}
                    </Text>
                    <Text style={styles.detailText}>
                        Valor: R$ {model.price?.toFixed(2) || '0,00'}
                    </Text>
                    <Text style={styles.detailText}>
                        {model.detailing || 'Detalhes não informados'}
                    </Text>

                    <View style={styles.actionsRow}>
                        {/* <Button
                            title="Editar"
                            color={projectPalete.color5}
                            onPress={() => handleEdit(model)}
                        /> */}

                        <Button
                            title="Apagar serviço"
                            color={projectPalete.color13}
                            onPress={() => handleDelete(model)}
                        />
                    </View>
                </View>
            ))}

            {/* <ModalService
                visible={modalVisible}
                service={editingService}
                onChange={handleChange}
                onCancel={() => setModalVisible(false)}
                onSave={handleSave}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    modelCard: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
    },
    detailText: {
        fontSize: 16,
        marginTop: 4,
    },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
    },
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
    modalButtonCancel: {
        backgroundColor: '#999',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    modalButtonSave: {
        backgroundColor: projectPalete.color1,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
});