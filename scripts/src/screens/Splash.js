import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// style
import { projectPalete } from '../assets/css/colors';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkFlow = async () => {
            const onboarding = await AsyncStorage.getItem('hasSeenOnboarding');
            const register = await AsyncStorage.getItem('hasSeenRegister');

            if (onboarding !== 'true') navigation.replace('Onboarding');
            else if (register !== 'true') navigation.replace('Register');
            else navigation.replace('HomeTabs');
        };

        checkFlow();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={projectPalete.color3} />
        </View>
    );
}