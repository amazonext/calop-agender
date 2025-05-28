import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// utils
import { getItemFromStorage } from '../utils/storage';

// style
import { projectPalete } from '../assets/styles/colors';

export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkFlow = async () => {
            const onboarding = await getItemFromStorage('hasSeenOnboarding');
            const register = await getItemFromStorage('hasSeenRegister');

            if (onboarding !== true) navigation.replace('Onboarding');
            else if (register !== true) navigation.replace('Register');
            else navigation.replace('HomeTabs');
        };

        checkFlow();
    }, [navigation]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={projectPalete.color1} />
        </View>
    );
}