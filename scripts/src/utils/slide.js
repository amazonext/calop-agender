import AsyncStorage from '@react-native-async-storage/async-storage';

async function onSkip(navigation) {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Register');  // Direciona para a tela de registro
}

async function onDone(navigation) {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.replace('Register');  // Direciona para a tela de registro
}

export { onDone, onSkip };