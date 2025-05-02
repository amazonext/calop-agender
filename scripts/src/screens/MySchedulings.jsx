import { View, Text } from "react-native";

// styles
import { mySchedulingStyles } from "../assets/css/mySchedulingStyles";

export default function MyScheduling() {
    return (
        <View style={mySchedulingStyles.container}>
            <Text>Tela de Meus agendamentos</Text>
        </View>
    )
}