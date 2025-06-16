import { Switch, Text, View } from "react-native";
import { settingsStyles } from "../assets/styles/settingsStyles";
import { projectPalete } from "../assets/styles/colors";

export default function SettingsSwitch({ label, detail, value, onToggle }) {
    return (
        <View style={settingsStyles.infoRow}>
            <View>
                <Text style={settingsStyles.infoLabel}>{label}</Text>
                <Text style={settingsStyles.infoDetail}>{detail}</Text>
            </View>
            <Switch
                trackColor={{ true: projectPalete.color9 }}
                thumbColor={value ? projectPalete.color12 : "#ECECEC"}
                onValueChange={onToggle}
                value={value}
            />
        </View>
    );
}