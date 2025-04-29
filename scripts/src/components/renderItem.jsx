import { View, Text, Image } from 'react-native';
import styles from '../assets/css/styles';

export default renderItem = ({ item }) => (
    <View style={{... styles.slide, backgroundColor: item.backgroundColor }}>
        <Image style={styles.image} source={item.image} />
        <Text style={{... styles.titleSlide, color: item.colors.title }}>{item.title}</Text>
        <Text style={{ ...styles.text, color: item.colors.text }}>{item.text}</Text>
    </View>
);