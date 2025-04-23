import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// styles
import styles from '../assets/css/styles'

export default function AddSchedule() {
    return (
        <SafeAreaView style={{ ...styles.container, gap: 30 }}>
            <View>
                <Text style={styles.titleItem}>Novo item</Text>
            </View>

            <View style={{ ...styles.content, gap: 20, padding: 20 }}>
                <View style={styles.field}>
                    <Text style={styles.label}>Procedimento</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o procedimento"
                        placeholderTextColor="#fff"
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Valor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o valor"
                        placeholderTextColor="#fff"
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Detalhamento (Opcional)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o procedimento"
                        placeholderTextColor="#fff"
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Profissional</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome do profissional"
                        placeholderTextColor="#fff"
                    />
                </View>
            </View>

            <Button
                title="Criar item"
                color="#D6AE4F"
            />
        </SafeAreaView>
    )
}