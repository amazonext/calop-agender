import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from "react-native";

// styles
import styles from '../assets/css/styles'

// utils
import { createSchedule, getAllSchedules } from "../utils/scheduling_models";

// style
import { projectPalete } from "../assets/css/colors";

export default function AddSchedule() {
    const [procedure, setProcedure] = useState("");
    const [value, setValue] = useState("");
    const [detailing, setDetailing] = useState("");
    const [profissionalName, setProfissionalName] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, padding: 20, gap: 30 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View>
                        <Text style={styles.titleItem}>Novo modelo de agendamento</Text>
                    </View>

                    <View style={{ ...styles.content, gap: 20, padding: 20 }}>
                        <View style={styles.field}>
                            <Text style={styles.label}>Procedimento</Text>
                            <TextInput
                                style={styles.input}
                                value={procedure}
                                onChangeText={setProcedure}
                                placeholder="Digite o procedimento"
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Valor</Text>
                            <TextInput
                                style={styles.input}
                                value={value}
                                onChangeText={setValue}
                                placeholder="Digite o valor"
                                placeholderTextColor="#fff"
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Detalhamento (Opcional)</Text>
                            <TextInput
                                style={styles.input}
                                value={detailing}
                                onChangeText={setDetailing}
                                placeholder="Digite o detalhamento"
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Profissional</Text>
                            <TextInput
                                style={styles.input}
                                value={profissionalName}
                                onChangeText={setProfissionalName}
                                placeholder="Digite o nome do profissional"
                                placeholderTextColor="#fff"
                            />
                        </View>
                    </View>

                    <Button
                        title="Criar modelo"
                        color={projectPalete.color6}
                        disabled={!procedure || !value || !profissionalName}
                        onPress={() => {
                            createSchedule({
                                description: procedure,
                                value: parseFloat(value),
                                detailing: detailing || "",
                                profissionalName: profissionalName
                            });

                            setProcedure("");
                            setValue("");
                            setDetailing("");
                            setProfissionalName("");
                        }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}