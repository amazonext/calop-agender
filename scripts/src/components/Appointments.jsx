import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { projectPalete } from '../assets/styles/colors';

export default function Appointments({ data: infos }) {
    const handleDelete = (model) =>
        Alert.alert('Excluir agendamento', 'Deseja realmente excluir?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', onPress: () => console.log('Excluído', model) },
        ]);

    const handleCancel = (model) =>
        Alert.alert('Cancelar agendamento', 'Deseja realmente cancelar?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => console.log('Cancelado', model) },
        ]);

    return (
        <View>
            {Object.entries(infos)
                .reverse()
                .map(([month, days]) =>
                    Object.entries(days)
                        .reverse()
                        .map(([day, procedures]) => {
                            const date = `${day}/${month}`;
                            const proceduresPerHour = procedures.reduce((acc, item) => {
                                const hora = item.hour;
                                if (!acc[hora]) acc[hora] = [];
                                acc[hora].push(item.model);
                                return acc;
                            }, {});
                            return (
                                <View key={date} style={styles.dateContainer}>
                                    <Text style={styles.dateTitle}>{date}</Text>
                                    {Object.entries(proceduresPerHour)
                                        .sort()
                                        .map(([hour, models]) => (
                                            <View key={hour} style={styles.hourContainer}>
                                                <Text style={styles.hourTitle}>{hour}</Text>
                                                {[...models]
                                                    .reverse()
                                                    .map((model, idx) => (
                                                        <View key={idx} style={styles.modelCard}>
                                                            <Text>
                                                                Procedimento: {model.procedure || 'Nome não informado'}
                                                            </Text>
                                                            <Text style={styles.detailText}>
                                                                Profissional: {model.profissional_name || '...'}
                                                            </Text>
                                                            <Text style={styles.detailText}>
                                                                Valor: R$ {model.value || '0,00'}
                                                            </Text>
                                                            <Text style={styles.detailText}>
                                                                {model.detailing || 'Detalhes não informados'}
                                                            </Text>

                                                            {/* Ações visíveis no card */}
                                                            <View style={styles.actionsRow}>
                                                                <TouchableOpacity
                                                                    style={[styles.actionButton, { backgroundColor: projectPalete.color13 }]}
                                                                    onPress={() => handleDelete(model)}
                                                                >
                                                                    <Text style={styles.actionText}>Concluir</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity
                                                                    style={[styles.actionButton, { backgroundColor: projectPalete.color5 }]}
                                                                    onPress={() => handleCancel(model)}
                                                                >
                                                                    <Text style={styles.actionText}>Cancelar</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                    ))}
                                            </View>
                                        ))}
                                </View>
                            );
                        })
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    dateContainer: {
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    dateTitle: { fontSize: 25, fontWeight: 'bold' },
    hourContainer: { marginTop: 10, padding: 10 },
    hourTitle: {
        fontSize: 20,
        fontWeight: '600',
        borderBottomWidth: 2,
        borderColor: '#bbb',
    },
    modelCard: { marginLeft: 10, padding: 5, backgroundColor: '#f9f9f9' },
    nameText: { fontSize: 16, fontWeight: '600' },
    detailText: { fontSize: 16 },
    rightActionsContainer: {
        flexDirection: 'row',
        width: 180, // 2 botões de 90 largura cada
    },
    rightActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        padding: 10,
    },
    actionText: { color: '#fff', fontWeight: '600' },
});