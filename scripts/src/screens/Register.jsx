import { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// utils
import { addUserInfos } from '../utils/user';
import { getFromStorage, saveToStorage } from '../utils/saveToStorage';

// style
import { projectPalete } from '../assets/css/colors';
import { saveImage, loadImage } from '../utils/image';

export default function Register({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const [enterpriseName, setEnterpriseName] = useState("");
    const [username, setUserName] = useState("");

    useEffect(() => {
        (async () => {
            const uri = await loadImage();
            if (uri) setImageUri(uri);
        })();
    }, []);

    const pickAndStore = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            return Alert.alert(
                'Permissão negada',
                'Precisamos de acesso à galeria para selecionar a imagem.'
            );
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const localUri = result.assets[0].uri;
            const savedUri = await saveImage(localUri);
            setImageUri(savedUri);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro</Text>

                <Button
                    title={imageUri ? 'Trocar Imagem' : 'Selecionar Imagem'}
                    color={projectPalete.color9}
                    onPress={pickAndStore}
                />

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                )}

                <TextInput
                    style={styles.input}
                    value={enterpriseName}
                    onChangeText={setEnterpriseName}
                    placeholder="Nome da empresa"
                />
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUserName}
                    placeholder="Seu nome"
                />
            </View>

            <View style={styles.footer}>
                <Button
                    title="Registrar"
                    color={projectPalete.color9}
                    disabled={!enterpriseName || !username}
                    onPress={ async () => {
                        await saveToStorage('hasSeenRegister', true);

                        addUserInfos({ username: username, enterprise_name: enterpriseName });

                        navigation.replace("HomeTabs");
                    }}
                />
                <TouchableOpacity
                    onPress={ async () => {
                        await saveToStorage('hasSeenRegister', true);
                        console.log(await getFromStorage('hasSeenRegister'));

                        navigation.replace("HomeTabs");
                    }}
                >
                    <Text style={styles.laterText}>Depois</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}