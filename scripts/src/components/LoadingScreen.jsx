import { View, Text, ActivityIndicator } from 'react-native';
import { projectPalete } from '../assets/styles/colors';

export default function LoadingScreen({ message = 'Carregando...' }) {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <ActivityIndicator size="large" color={projectPalete.color1} />
            <Text style={{ marginTop: 10, fontSize: 16 }}>{message}</Text>
        </View>
    );
}