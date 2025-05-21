import AppIntroSlider from 'react-native-app-intro-slider';

// navigation
import slides from '../navigation/slides';

// utils
import item from '../components/Item';
import { saveToStorage } from '../utils/storage';

export default function Onboarding({ navigation }) {
    const handleFinish = async () => {
        await saveToStorage('hasSeenOnboarding', true);
        navigation.replace('Register');
    };

    return (
        <AppIntroSlider
            data={slides}
            renderItem={item}
            showPrevButton
            prevLabel='Voltar'
            showNextButton
            nextLabel='Próximo'
            doneLabel='Continuar'
            onDone={handleFinish}
            showSkipButton
            skipLabel='Pular'
            onSkip={handleFinish}
        />
    );
}