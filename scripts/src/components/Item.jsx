import { View, Text, Image } from 'react-native';
import { itemStyles } from '../assets/styles/itemStyles';

export default function item({ item }) {
    return (
        <View style={{
            ...itemStyles.slide,
            backgroundColor: item.backgroundColor
        }}>
            <Image style={itemStyles.image} source={item.image} />
            <Text style={{
                ...itemStyles.titleSlide,
                color: item.colors.title
            }}>
                {item.title}
            </Text>
            <Text style={{
                ...itemStyles.text,
                color: item.colors.text
            }}>
                {item.text}
            </Text>
        </View>
    );
}