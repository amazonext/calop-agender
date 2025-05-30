import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
 import { profileStyles as styles } from "../assets/styles/profileStyles";
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation, user }) {

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={profileStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={profileStyles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={profileStyles.headerTitle}>Perfil</Text>
        <View style={{ width: 24 }} /> 
      </View>

      {/* imagem do Profile */}
      <View style={profileStyles.photoContainer}>
        {user?.image_uri ? (
          <Image source={{ uri: user.image_uri }} style={profileStyles.userPhoto} />
        ) : (
          <Ionicons name="person-circle-outline" size={120} color="#888" />
        )}
        <TouchableOpacity style={profileStyles.changePhotoButton}>
          <Text style={profileStyles.changePhotoButtonText}>Alterar imagem de perfil</Text>
        </TouchableOpacity>
      </View>

      {/* nomes e inputs relacionados*/}
      <TouchableOpacity style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome do usuário</Text>
        <Text style={profileStyles.inputButtonValue}>{user?.name || "Nome não definido"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={profileStyles.inputButton}>
        <Text style={profileStyles.inputButtonLabel}>Nome da empresa</Text>
        <Text style={profileStyles.inputButtonValue}>{user?.enterprise_name || "Empresa não definida"}</Text>
      </TouchableOpacity>

    </View>
  );
}
