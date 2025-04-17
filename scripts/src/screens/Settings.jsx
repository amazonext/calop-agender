import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// styles
import styles from '../assets/css/styles'

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Tela de Configurações</Text>
        </SafeAreaView>
    )
}