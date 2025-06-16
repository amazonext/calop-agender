import { View, Text, Alert, StyleSheet, Button } from 'react-native';
import { projectPalete } from '../assets/styles/colors';
import { removeAppointment } from '../utils/appointments';
import { getDateInFull } from '../utils/date';
import Loading from './Loading';

export default function Appointments({ data: infos, dateInFull }) {
    if (dateInFull === undefined) return <Loading />;

    const handleDelete = model =>
        Alert.alert('Excluir agendamento', 'Deseja realmente excluir?', [
            { text: 'Cancelar', style: 'cancel' },
            {
                text: 'Excluir', onPress: async () => {
                    await removeAppointment(model.id);
                }
            }
        ]);

    const handleCancel = model =>
        Alert.alert('Cancelar agendamento', 'Deseja realmente cancelar?', [
            { text: 'Não', style: 'cancel' },
            {
                text: 'Sim', onPress: async () => {
                    await removeAppointment(model.id);
                }
            }
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
                                    {
                                        dateInFull ?
                                            <Text style={styles.dateTitle}>{getDateInFull(date)}</Text>
                                            :
                                            <Text style={styles.dateTitle}>{date}</Text>
                                    }

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
                                                                Valor: R$ {model.price || '0,00'}
                                                            </Text>
                                                            <Text style={styles.detailText}>
                                                                {model.detailing || 'Detalhes não informados'}
                                                            </Text>

                                                            {/* Ações visíveis no card */}
                                                            <View style={styles.actionsRow}>
                                                                <Button
                                                                    title="Concluído"
                                                                    color={projectPalete.color13}
                                                                    onPress={() => handleDelete(model)}
                                                                />
                                                                <Button
                                                                    title="Cancelar"
                                                                    color={projectPalete.color5}
                                                                    onPress={() => handleCancel(model)}
                                                                />
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
    dateTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    hourContainer: {
        marginTop: 10,
        padding: 10
    },
    hourTitle: {
        fontSize: 20,
        fontWeight: '600',
        borderBottomWidth: 2,
        borderColor: '#bbb',
    },
    modelCard: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 10,
    },
    detailText: { fontSize: 16 },
    actionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});