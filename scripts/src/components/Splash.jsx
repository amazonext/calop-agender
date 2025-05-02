import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// utils
import { getFromStorage } from '../utils/saveToStorage';

// style
import { projectPalete } from '../assets/css/colors';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkFlow = async () => {
            const onboarding = await getFromStorage('hasSeenOnboarding');
            const register = await getFromStorage('hasSeenRegister');

            if (onboarding !== true) navigation.replace('Onboarding');
            else if (register !== true) navigation.replace('Register');
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