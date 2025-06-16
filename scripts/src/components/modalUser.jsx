import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { editUser } from "../assets/styles/modals";

export default function ModalUser({
    visible, fieldToEdit, value,
    onChange, onCancel, onSave
}) {
    const getFieldLabel = () => {
        if (fieldToEdit === "name") return "Nome do usuário";
        if (fieldToEdit === "enterprise_name") return "Nome da empresa";
        return "Campo";
    };

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <View style={editUser.modalOverlay}>
                <View style={editUser.modalContainer}>
                    <Text style={editUser.modalTitle}>Editar {getFieldLabel()}</Text>
                    <TextInput
                        style={editUser.modalInput}
                        value={value}
                        onChangeText={onChange}
                        placeholder="Digite o novo valor"
                        placeholderTextColor="#ccc"
                    />
                    <View style={editUser.modalButtons}>
                        <TouchableOpacity onPress={onCancel} style={editUser.modalButtonCancel}>
                            <Text style={{ color: "#fff" }}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onSave} style={editUser.modalButtonSave}>
                            <Text style={{ color: "#fff" }}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}