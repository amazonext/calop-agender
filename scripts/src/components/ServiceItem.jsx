import { TouchableOpacity, Text } from 'react-native';
import { createProcedure } from '../assets/styles/modals';

export default function ServiceItem({ item, onSelect }) {
    return (
        <TouchableOpacity
            style={createProcedure.dropdownItem}
            onPress={() => onSelect(item)}
        >
            <Text style={createProcedure.dropdownItemText}>
                {item.procedure}
            </Text>
        </TouchableOpacity>
    );
}