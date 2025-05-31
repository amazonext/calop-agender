import { View, Text } from 'react-native';

export default function Appointments({ data: infos }) {
    return (
        <View>
            {Object.entries(infos).map(([month, days]) => (
                Object.entries(days).map(([day, procedures]) => {
                    const date = `${day}/${month}`; // ex: 31/05
                    const proceduresPerHour = procedures.reduce((acc, item) => {
                        const hora = item.hour;
                        if (!acc[hora]) acc[hora] = [];
                        acc[hora].push(item.model);
                        return acc;
                    }, {});

                    return (
                        <View key={date} style={{ marginBottom: 20, borderWidth: 2 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                {date}
                            </Text>

                            {Object.entries(proceduresPerHour).map(([hour, models]) => (
                                <View key={hour} style={{ marginTop: 10, borderWidth: 2 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '600' }}>{hour}</Text>

                                    {models.map((model, index) => (
                                        <View key={index} style={{ marginLeft: 10, marginTop: 5, borderWidth: 2, padding: 5 }}>
                                            <Text>{model.name || 'Nome não informado'}</Text>
                                            <Text>Profissional: {model.profissional_name || 'Profissional não informado'}</Text>
                                            <Text>Valor: R$ {model.value || '0,00'}</Text>
                                            <Text>Detalhamento: {model.detailing || 'Detalhamento não informado'}</Text>
                                        </View>
                                    ))}
                                </View>
                            ))}
                        </View>
                    );
                })
            ))}
        </View>
    );
}