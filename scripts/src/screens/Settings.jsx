import { View, Text, Image, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// styles
import styles, { settingsStyles } from '../assets/css/styles';

// components
import Profile from "../components/Profile";

export default function Settings() {
    const handleResetOnboarding = async () => {
        await AsyncStorage.removeItem('hasSeenOnboarding');
        // Alert.alert('Reset', 'A tela de introdução será exibida na próxima vez que o app for aberto.');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={settingsStyles.userBox}>
                <Image source={ defaultUserPhoto } style={settingsStyles.userPhoto} />
                <Text style={settingsStyles.Username}>Nome do Usuário</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Resetar Tela de Introdução" onPress={handleResetOnboarding} />
            </View>
        </SafeAreaView>
    );
}
