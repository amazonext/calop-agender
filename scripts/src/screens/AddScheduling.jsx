import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Keyboard } from "react-native";

import { addSchedulingStyles } from "../assets/styles/addSchedulingStyles";
import { createScheduling } from "../utils/scheduling_db";
import { projectPalete } from "../assets/styles/colors";

export default function AddScheduling() {
    const [detailing, setDetailing] = useState("");
    const [profissionalName, setProfissionalName] = useState("");
    const [procedure, setProcedure] = useState("");
    const [price, setPrice] = useState("");

    const handleCreateScheduling = () => {
        Keyboard.dismiss();

        createScheduling({
            procedure: procedure,
            price: parseFloat(price),
            detailing: detailing || "",
            profissional_name: profissionalName
        });

        setProcedure("");
        setPrice("");
        setDetailing("");
        setProfissionalName("");
    };

    const isFormValid = procedure && price && profissionalName;

    return (
        <View style={addSchedulingStyles.container}>
            <KeyboardAvoidingView
                style={addSchedulingStyles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={addSchedulingStyles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={addSchedulingStyles.header}>
                        <Text style={addSchedulingStyles.titleItem}>Novo modelo de serviço</Text>
                        <Text style={addSchedulingStyles.subtitleItem}>Defina o procedimento, valor, detalhamento e o(a) profissional</Text>
                        <View style={addSchedulingStyles.titleUnderline} />
                    </View>

                    <View style={addSchedulingStyles.formCard}>
                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Procedimento</Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <TextInput
                                    style={addSchedulingStyles.input}
                                    value={procedure}
                                    maxLength={20}
                                    onChangeText={setProcedure}
                                    placeholder="Digite o procedimento"
                                    placeholderTextColor={projectPalete.color2 + '50'}
                                />
                            </View>
                        </View>

                        <View style={addSchedulingStyles.field}>
                            <Text style={addSchedulingStyles.label}>Valor</Text>
                            <View style={addSchedulingStyles.inputContainer}>
                                <Text style={addSchedulingStyles.currencySymbol}>R$</Text>
                                <TextInput
                                    style={[addSchedulingStyles.input, addSchedulingStyles.currencyInput]}
                                    value={price}
                                    maxLength={20}
                                    onChangeText={setPrice}
                                    placeholder="0,00"
                                    placeholderTextColor={projectPalete.color2 + '50'}
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
                                    maxLength={20}
                                    onChangeText={setDetailing}
                                    placeholder="Digite o detalhamento do serviço"
                                    placeholderTextColor={projectPalete.color2 + '50'}
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
                                    maxLength={20}
                                    onChangeText={setProfissionalName}
                                    placeholder="Digite o nome do profissional"
                                    placeholderTextColor={projectPalete.color2 + '50'}
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