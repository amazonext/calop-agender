import { Text, View } from 'react-native';
import styles, { settingsStyles } from '../assets/css/styles';

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Este app foi desenvolvido por The Heapsters.{'\n'}
        Versão: 1.0.0
      </Text>
    </SafeAreaView>
  );
}
