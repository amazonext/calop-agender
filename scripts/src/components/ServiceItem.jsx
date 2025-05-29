import { TouchableOpacity, Text } from 'react-native';
import { createScheduling } from '../assets/styles/modals';

export default function ServiceItem({ item, onSelect }) {
    return (
        <TouchableOpacity
            style={[
                createScheduling.dropdownItem,
                index === servicesLength - 1 ? createScheduling.lastDropdownItem : {}
            ]}
            onPress={() => onSelect(item)}
        >
            <Text style={createScheduling.dropdownItemText}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );
}