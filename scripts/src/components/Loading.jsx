import { View, ActivityIndicator } from 'react-native';
import { projectPalete } from '../assets/styles/colors';

export default function Loading() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator size="50" color={projectPalete.color1} />
        </View>
    );
}