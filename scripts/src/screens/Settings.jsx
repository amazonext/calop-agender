import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import { FontAwesome6, FontAwesome5, Octicons } from '@expo/vector-icons';

// hooks
import { useUserInfo } from "../hooks/useUserInfo";
import { useSettings } from "../hooks/useSettings";

// components
import Loading from "../components/Loading";
import SettingsSwitch from "../components/SettingsSwitch";

// styles
import { settingsStyles } from '../assets/styles/settingsStyles';
import { saveSettings } from "../utils/saveSettings";

export default function Settings({ navigation }) {
    const userInfo = useUserInfo();
    const settings = useSettings();

    // const [isEnabledEnterpriseSingular, setIsEnabledEnterpriseSingular] = useState(undefined);
    const [isEnabledDateInFull, setIsEnabledDateInFull] = useState(undefined);

    useEffect(() => {
        if (settings) {
            // setIsEnabledEnterpriseSingular(settings.enterpriseSingular);
            setIsEnabledDateInFull(settings.dateInFull);
        }
    }, [settings]);

    // const toggleSwitchEnterprise = () => {
    //     const newValue = !isEnabledEnterpriseSingular;

    //     setIsEnabledEnterpriseSingular(newValue);
    //     settings?.setEnterpriseSingular?.(newValue);

    //     saveSettings({ enterpriseSingular: newValue });
    // };

    const toggleSwitchDate = () => {
        const newValue = !isEnabledDateInFull;

        setIsEnabledDateInFull(newValue);
        settings?.setDateInFull?.(newValue);

        Alert.alert("Atenção!", "Para a configuração ser aplicada, feche e abra o aplicativo novamente.");

        saveSettings({ dateInFull: newValue });
    };

    if (
        !userInfo ||
        !settings ||
        isEnabledDateInFull === undefined
    ) return <Loading />;

    const { name, enterprise_name } = userInfo;

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                <View style={settingsStyles.userInfo}>
                    <Octicons name="organization" size={40} color="#aaa" />
                    <View>
                        <Text style={settingsStyles.username}>
                            {name ?? 'Nome de usuário indefinido'}
                        </Text>
                        <Text style={settingsStyles.enterprise}>
                            {enterprise_name ?? 'Nome da empresa ainda não definida'}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <FontAwesome6 name="chevron-right" color="#ccc" size={35} />
                </TouchableOpacity>
            </View>

            <View style={settingsStyles.section}>
                <Text style={settingsStyles.sectionTitle}>Ajustes</Text>
                <View style={settingsStyles.infoCard}>
                    {/* <SettingsSwitch
                        label="Modo empresário autônomo"
                        detail="A opção de selecionar um profissional é removida"
                        value={isEnabledEnterpriseSingular}
                        onToggle={toggleSwitchEnterprise}
                    /> */}

                    <SettingsSwitch
                        label="Data por extenso"
                        detail="A data na lista de agendamentos será exibida por extenso (por exemplo: 10 de maio)"
                        value={isEnabledDateInFull}
                        onToggle={toggleSwitchDate}
                    />
                </View>
            </View>

            <View style={settingsStyles.section}>
                <Text style={settingsStyles.sectionTitle}>App info</Text>
                <View style={settingsStyles.infoCard}>
                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>Versão</Text>
                        <Text style={settingsStyles.infoValue}>1.0.0</Text>
                    </View>
                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>SDK Version</Text>
                        <Text style={settingsStyles.infoValue}>53.0.0</Text>
                    </View>

                    <View style={[settingsStyles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={settingsStyles.infoLabel}>Site do Projeto</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text
                                style={settingsStyles.linkValue}
                                onPress={() => Linking.openURL('https://theheapsters.github.io/calop-agender/presentation/')}
                            >
                                Calop Agender
                            </Text>
                            <FontAwesome5 name="link" size={12} color="#ccc" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}