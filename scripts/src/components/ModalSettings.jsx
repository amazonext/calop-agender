import { Modal, Text, View, Button, TextInput } from "react-native";
import { settingsStyles } from '../assets/styles/settingsStyles';
import { settings } from "../assets/styles/modals";

export default function ModalSettings({
    modalVisible,
    setModalVisible,
    editedName,
    setEditedName,
    editedEnterprise,
    setEditedEnterprise,
    handleSave,
    handlePickImage,
    editedImage,
    setEditedImage,
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

                    <TouchableOpacity
                        onPress={handlePickImage}
                        style={settingsStyles.imagePicker}
                    >
                        {editedImage ? (
                            <Image source={{ uri: editedImage }} style={settingsStyles.imagePreview} />
                        ) : (
                            <Text style={settingsStyles.imagePickerText}>Selecionar imagem</Text>
                        )}
                    </TouchableOpacity>

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