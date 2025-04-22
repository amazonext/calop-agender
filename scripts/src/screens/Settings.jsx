import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles, { settingsStyles } from '../assets/css/styles';

const defaultUserPhoto = require('../assets/images/logo-app.png');

export default function Settings({ navigation, user = { name: "Nome do Usuário", photo: defaultUserPhoto } }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={settingsStyles.userBox}>
                <Image source={user.photo} style={settingsStyles.userPhoto} />
                <Text style={settingsStyles.userName}>{user.name}</Text>
            </View>

            {/* Botões */}
            <TouchableOpacity
                style={settingsStyles.button}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={settingsStyles.buttonText}>Sobre</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
