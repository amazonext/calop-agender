import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

// navigation
import slides from '../navigation/slides';

// utils
import { onDone, onSkip } from '../utils/slide';
import renderItem from '../components/renderItem';

export default function Onboarding({ onFinish }) {
    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={onFinish}
            showSkipButton
            onSkip={onFinish}
        />
    );
}