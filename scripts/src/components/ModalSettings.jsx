import { Modal, Text, View, Button, TextInput } from "react-native";
import { settingsStyles } from '../assets/css/settingsStyles';
import { settings } from "../assets/css/ModalsStyles";

export default function ModalSettings({
    modalVisible,
    setModalVisible,
    editedName,
    setEditedName,
    editedEnterprise,
    setEditedEnterprise,
    handleSave
}) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={settings.overlay}>
                <View style={settings.container}>
                    <Text style={settings.title}>Editar informações</Text>
                    <TextInput
                        value={editedName}
                        onChangeText={setEditedName}
                        placeholder="Nome do usuário"
                        style={settingsStyles.input}
                    />
                    <TextInput
                        value={editedEnterprise}
                        onChangeText={setEditedEnterprise}
                        placeholder="Nome da empresa"
                        style={settingsStyles.input}
                    />
                    <View style={settings.buttonGroup}>
                        <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                        <View style={{ width: 10 }} />
                        <Button title="Salvar" onPress={handleSave} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}