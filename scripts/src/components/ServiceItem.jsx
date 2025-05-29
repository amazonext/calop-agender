import { TouchableOpacity, Text } from 'react-native';
import { createScheduling } from '../assets/styles/modals';

export default function ServiceItem({ item, onSelect }) {
    return (
        <TouchableOpacity
            style={createScheduling.dropdownItem}
            onPress={() => onSelect(item)}
        >
            <Text style={createScheduling.dropdownItemText}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );
}