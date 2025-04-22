import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// styles
import styles from '../assets/css/styles'

export default function AddSchedule() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View>
                    <Text style={styles.titleItem}>Novo item</Text>
                </View>

                <View style={{ gap: 10 }}>
                    {/* campos pra preencher */}
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

                <View style={styles.Button}>
                    {/* botão de enviar */}
                    <TouchableOpacity>
                        <Text style={styles.Button}>Criar item</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}