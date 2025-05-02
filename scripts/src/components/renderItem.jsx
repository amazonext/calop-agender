import { View, Text, Image } from 'react-native';

// style
import { renderItemStyles } from '../assets/css/renderItemStyles';

export default RenderItem = ({ item }) => (
    <View style={{ ...renderItemStyles.slide, backgroundColor: item.backgroundColor }}>
        <Image style={renderItemStyles.image} source={item.image} />
        <Text style={{ ...renderItemStyles.titleSlide, color: item.colors.title }}>{item.title}</Text>
        <Text style={{ ...renderItemStyles.text, color: item.colors.text }}>{item.text}</Text>
    </View>
);