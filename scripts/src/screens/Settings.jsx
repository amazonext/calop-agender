import { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";

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

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Resetar Tela de Introdução" onPress={handleResetOnboarding} />
            </View>
        </View>
    );
}