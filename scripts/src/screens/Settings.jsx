import { View, Text, Image, Button } from "react-native";

// styles
import { settingsStyles } from '../assets/css/settingsStyles';

export default function Settings() {
    const handleResetOnboarding = async () => {
        await AsyncStorage.removeItem('hasSeenOnboarding');
        await AsyncStorage.removeItem('hasSeenRegister');

        console.log('A tela de introdução será exibida na próxima vez que o app for aberto.');
    };

    return (
        <View style={settingsStyles.container}>
            <View style={settingsStyles.userBox}>
                <Image source={ defaultUserPhoto } style={settingsStyles.userPhoto} />
                <Text style={settingsStyles.username}>Nome do Usuário</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Resetar Tela de Introdução" onPress={handleResetOnboarding} />
            </View>
        </View>
    );
}