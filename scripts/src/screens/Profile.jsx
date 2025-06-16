import { View, Text, TouchableOpacity, Alert } from "react-native";
import { profileStyles } from "../assets/styles/profileStyles";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

// hooks
import { useUserInfo } from "../hooks/useUserInfo";

// database functions
import { editUserInfos, getUserInfos } from "../utils/user_db";

// components
import Loading from "../components/Loading";
import ModalUser from "../components/ModalUser";

export default function Profile() {
  const { name, enterprise_name } = useUserInfo() || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [fieldToEdit, setFieldToEdit] = useState(null);
  const [newValue, setNewValue] = useState("");

  const [currentName, setCurrentName] = useState(name);
  const [currentEnterpriseName, setCurrentEnterpriseName] = useState(enterprise_name);
  const [loading, setLoading] = useState(!name && !enterprise_name);


  useEffect(() => {
    async function loadUserData() {
      const user = await getUserInfos();
      if (user) {
        setCurrentName(user.name);
        setCurrentEnterpriseName(user.enterprise_name);
      }
      setLoading(false);
    }
    loadUserData();
  }, [modalVisible]);

  if (loading) return <Loading />;

  const openEditModal = field => {
    setFieldToEdit(field);
    setNewValue(field === "name" ? currentName : currentEnterpriseName);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!newValue.trim()) {
      Alert.alert("Erro", "O campo não pode estar vazio");
      return;
    }

    const updatedData = {
      name: fieldToEdit === "name" ? newValue : currentName,
      enterprise_name: fieldToEdit === "enterprise_name" ? newValue : currentEnterpriseName,
    };

    try {
      editUserInfos(updatedData);
      setCurrentName(updatedData.name);
      setCurrentEnterpriseName(updatedData.enterprise_name);
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar dados: " + error.message);
      console.error("Erro ao salvar dados: " + error.message);
      setModalVisible(false);
    }

    Alert.alert("Atenção!", "Para a configuração ser aplicada, feche e abra o aplicativo novamente.");
  };

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome do usuário</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={profileStyles.inputButtonValue}>{currentName || "Nome não definido"}</Text>
          <TouchableOpacity onPress={() => openEditModal("name")}>
            <FontAwesome6 name="edit" size={30} color="#FFFDF7" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome da empresa</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={profileStyles.inputButtonValue}>{currentEnterpriseName || "Empresa não definida"}</Text>
          <TouchableOpacity onPress={() => openEditModal("enterprise_name")}>
            <FontAwesome6 name="edit" size={30} color="#FFFDF7" />
          </TouchableOpacity>
        </View>
      </View>

      <ModalUser
        visible={modalVisible}
        fieldToEdit={fieldToEdit}
        value={newValue}
        onChange={setNewValue}
        onCancel={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </View>
  );
}