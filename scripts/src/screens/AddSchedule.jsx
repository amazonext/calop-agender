import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// styles
import styles from '../assets/css/styles'

// hooks
import { useSelectAll } from '../hooks/useSchedules';

// utils
import { createSchedule } from "../utils/schedules";
import { dropTable } from "../helpers/db";

export default function AddSchedule() {
    // hooks originais
    const [procedure, setProcedure] = useState("");
    const [value, setValue] = useState("");
    const [detailing, setDetailing] = useState("");
    const [profissionalName, setProfissionalName] = useState("");

    // hook personalizado
    const [schedules, refreshSchedules] = useSelectAll('schedules');

    return (
        <ScrollView style={{ ...styles.container, gap: 30 }}>
            <View>
                <Text style={styles.titleItem}>Novo item</Text>
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
                title="Criar item"
                color="#D6AE4F"
                disabled={!procedure || !value || !profissionalName}
                onPress={() => {
                    createSchedule({
                        procedure,
                        value: parseFloat(value),
                        detailing,
                        profissionalName
                    });

                    refreshSchedules();

                    // limpa os campos
                    setProcedure("");
                    setValue("");
                    setDetailing("");
                    setProfissionalName("");
                }}
            />

            <Button
                title="Dropar tabela"
                color="#D6AE4F"
                onPress={() => {
                    dropTable('schedules');
                    refreshSchedules();
                }}
            />

            <Button
                title="Ver conteúdo"
                color="#D6AE4F"
                onPress={() => console.table(schedules)}
            />
        </ScrollView>
    )
}