import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

import { addSchedulingStyles } from "../assets/css/addSchedulingStyles";
import { createScheduling } from "../utils/scheduling_db";
import { projectPalete } from "../assets/css/colors";

export default function AddScheduling() {
    const [procedure, setProcedure] = useState("");
    const [value, setValue] = useState("");
    const [detailing, setDetailing] = useState("");
    const [profissionalName, setProfissionalName] = useState("");

    const handleCreateScheduling = () => {
        createScheduling({
            description: procedure,
            value: parseFloat(value),
            detailing: detailing || "",
            profissional_name: profissionalName
        });

        setProcedure("");
        setValue("");
        setDetailing("");
        setProfissionalName("");
    };

    const isFormValid = procedure && value && profissionalName;

    return (
        <View style={addSchedulingStyles.container}>
            <KeyboardAvoidingView
                style={addSchedulingStyles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={addSchedulingStyles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={addSchedulingStyles.header}>
                        <Text style={addSchedulingStyles.titleItem}>Novo modelo de serviço</Text>
                        <View style={addSchedulingStyles.titleUnderline} />
                    </View>

                    <View style={addSchedulingStyles.formCard}>
                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Procedimento</Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <TextInput
                                    style={addSchedulingStyles.input}
                                    value={procedure}
                                    onChangeText={setProcedure}
                                    placeholder="Digite o procedimento"
                                    placeholderTextColor={projectPalete.color5}
                                />
                            </View>
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Valor</Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <Text style={addSchedulingStyles.currencySymbol}>R$</Text>
                                <TextInput
                                    style={[addSchedulingStyles.input, addSchedulingStyles.currencyInput]}
                                    value={value}
                                    onChangeText={setValue}
                                    placeholder="0,00"
                                    placeholderTextColor={projectPalete.color5}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>
                                Detalhamento
                                <Text style={addSchedulingStyles.optionalText}> (Opcional)</Text>
                            </Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <TextInput
                                    style={[addSchedulingStyles.input, addSchedulingStyles.textArea]}
                                    value={detailing}
                                    onChangeText={setDetailing}
                                    placeholder="Digite o detalhamento do serviço"
                                    placeholderTextColor={projectPalete.color5}
                                    multiline
                                    numberOfLines={3}
                                    textAlignVertical="top"
                                />
                            </View>
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Profissional</Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <TextInput
                                    style={addSchedulingStyles.input}
                                    value={profissionalName}
                                    onChangeText={setProfissionalName}
                                    placeholder="Digite o nome do profissional"
                                    placeholderTextColor={projectPalete.color5}
                                />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[
                            addSchedulingStyles.submitButton,
                            !isFormValid && addSchedulingStyles.submitButtonDisabled
                        ]}
                        disabled={!isFormValid}
                        onPress={handleCreateScheduling}
                        activeOpacity={0.8}
                    >
                        <Text style={[
                            addSchedulingStyles.submitButtonText,
                            !isFormValid && addSchedulingStyles.submitButtonTextDisabled
                        ]}>
                            Criar modelo
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}