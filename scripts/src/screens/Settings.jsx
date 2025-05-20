import { useEffect, useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfos } from "../utils/user_db";
import { query } from "../helpers/db";
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

// styles
import { settingsStyles } from '../assets/css/settingsStyles';

export default function Settings() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUserInfos();
            setUserInfo(data);
        };

        fetchUser();
    }, []);

    const handleResetOnboarding = async () => {
        await AsyncStorage.removeItem('hasSeenOnboarding');
        await AsyncStorage.removeItem('hasSeenRegister');
        console.log('A tela de introdução será exibida na próxima vez que o app for aberto.');
    };

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                {userInfo?.image_uri ? (
                    <Image source={{ uri: userInfo.image_uri }} style={settingsStyles.userPhoto} />
                ) : (
                    <Ionicons
                        name="person-circle-sharp"
                        size={60}
                        color="#aaa"
                    />

                )}
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={settingsStyles.name}>{userInfo?.name || 'Nome de usuário indefinido'}</Text>
                        <Text style={settingsStyles.enterprise}>{userInfo?.enterprise_name || 'Nome da empresa indefinida'}</Text>
                    </View>

                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <FontAwesome6
                            name="edit"
                            color="#ccc"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Seção: Informações do App */}
            <View style={settingsStyles.section}>
                <Text style={settingsStyles.sectionTitle}>App info.</Text>
                <View style={settingsStyles.infoCard}>

                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>Versão</Text>
                        <Text style={settingsStyles.infoValue}>1.0.0</Text>
                    </View>

                    <View style={settingsStyles.infoRow}>
                        <Text style={settingsStyles.infoLabel}>SDK Version</Text>
                        <Text style={settingsStyles.infoValue}>52</Text>
                    </View>

                    <View style={[settingsStyles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={settingsStyles.infoLabel}>Site do Projeto</Text>
                        <Text
                            style={settingsStyles.linkValue}
                            onPress={() => Linking.openURL('https://theheapsters.github.io/calop-agender/presentation/')}
                        > Link </Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Reset" onPress={handleResetOnboarding} />
            </View>
        </View>
    );
}
