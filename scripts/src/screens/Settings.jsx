import { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { Linking } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserInfos } from "../utils/user";

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
                    <Image source={require('../assets/images/logo-app.png')} style={settingsStyles.userPhoto} />
                )}
                <Text style={settingsStyles.name}>{userInfo?.name || 'Nome não encontrado'}</Text>
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

                    {/*aqui tem uma mudança para tirar a ultima linha da seção(por fins estéti*/}
                    <View style={[settingsStyles.infoRow, { borderBottomWidth: 0 }]}>
                        <Text style={settingsStyles.infoLabel}>Presetation</Text>
                        {/*falta trocar o link fantasia(meusite) pelo link do site*/}
                        <Text
                            style={settingsStyles.linkValue}
                            onPress={() => Linking.openURL('https://google.com')}
                        > Link </Text> 
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Resetar Tela de Introdução" onPress={handleResetOnboarding} />
            </View>
        </View>
    );
}
