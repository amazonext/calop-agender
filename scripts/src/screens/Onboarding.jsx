import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

// navigation
import slides from '../navigation/slides';

// utils
import RenderItem from '../components/RenderItem';

export default function Onboarding({ navigation }) {
    const handleFinish = async () => {
        await AsyncStorage.setItem('hasSeenOnboarding', 'true');
        navigation.replace('Register');
    };

    return (
        <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            showPrevButton
            prevLabel='Voltar'
            showNextButton
            nextLabel='Próximo'
            doneLabel='Feito'
            onDone={handleFinish}
            showSkipButton
            skipLabel='Pular'
            onSkip={handleFinish}
        />
    );
}