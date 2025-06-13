import { View, Text, TouchableOpacity, Alert } from "react-native";
import { profileStyles } from "../assets/styles/profileStyles";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

// hooks
import { useUserInfo } from "../hooks/useUserInfo";

// components
import Loading from "../components/Loading";

export default function Profile() {
  const { name, enterprise_name, image_uri } = useUserInfo() || {};

  if (!name && !enterprise_name && !image_uri) return <Loading />;

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome do usuário</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={profileStyles.inputButtonValue}>{name || "Nome não definido"}</Text>
          <FontAwesome6 name="edit" size={20} color="aaa" />
        </View>
      </View>

      <View style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome da empresa</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Text style={profileStyles.inputButtonValue}>{enterprise_name || "Empresa não definida"}</Text>
          <FontAwesome6 name="edit" size={20} color="aaa" />
        </View>
      </View>
    </View>
  );
}