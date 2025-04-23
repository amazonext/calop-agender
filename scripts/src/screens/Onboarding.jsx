import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

// navigation
import slides from '../navigation/slides';

// utils
import { onDone, onSkip } from '../utils/slide';
import renderItem from '../components/renderItem';

export default function Onboarding({ navigation }) {
    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={() => onDone(navigation)} 
            showSkipButton
            onSkip={() => onSkip(navigation)}
        />
    );
}