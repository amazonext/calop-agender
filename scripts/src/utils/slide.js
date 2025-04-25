import AsyncStorage from '@react-native-async-storage/async-storage';

async function onSkip(navigation) {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Tela inicial');
}

async function onDone(navigation) {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Tela inicial');
}

export { onDone, onSkip };