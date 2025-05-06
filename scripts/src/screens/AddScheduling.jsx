import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

// styles
import { addSchedulingStyles } from "../assets/css/addSchedulingStyles";
// utils
import { createScheduling } from "../utils/scheduling_models";

// style
import { projectPalete } from "../assets/css/colors";

export default function AddScheduling() {
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
                        <Text style={addSchedulingStyles.titleItem}>Novo modelo de serviço</Text>
                    </View>

                    <View style={{ ...addSchedulingStyles.content, gap: 20, padding: 20 }}>
                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Procedimento</Text>
                            <TextInput
                                style={addSchedulingStyles.input}
                                value={procedure}
                                onChangeText={setProcedure}
                                placeholder="Digite o procedimento"
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Valor</Text>
                            <TextInput
                                style={addSchedulingStyles.input}
                                value={value}
                                onChangeText={setValue}
                                placeholder="Digite o valor"
                                placeholderTextColor="#fff"
                                keyboardType="number-pad"
                            />
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Detalhamento (Opcional)</Text>
                            <TextInput
                                style={addSchedulingStyles.input}
                                value={detailing}
                                onChangeText={setDetailing}
                                placeholder="Digite o detalhamento"
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Profissional</Text>
                            <TextInput
                                style={addSchedulingStyles.input}
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
                            createScheduling({
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