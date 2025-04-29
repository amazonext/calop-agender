import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import { saveImage, loadImage } from '../utils/image';
import { projectPalete } from '../assets/css/colors';
import { addUserInfos } from '../utils/user';

export default function Register({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const [enterpriseName, setEnterpriseName] = useState("");
    const [Username, setUserName] = useState("");

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
                    value={Username}
                    onChangeText={setUserName}
                    placeholder="Seu nome"
                />
            </View>

            <View style={styles.footer}>
                <Button
                    title="Registrar"
                    color={projectPalete.color9}
                    disabled={!enterpriseName || !Username}
                    onPress={() => {
                        addUserInfos(Username, enterpriseName);
                        navigation.navigate('Main', { screen: 'Tela inicial' });
                    }
                }
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main', { screen: 'Tela inicial' })}
                >
                    <Text style={styles.laterText}>Depois</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: projectPalete.color6,
        padding: 25
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: projectPalete.color10
    },
    input: {
        height: 40,
        borderColor: 'transparent',
        borderRadius: 15,
        backgroundColor: projectPalete.color1,
        color: '#fff',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 8,
    },
    imagePickerButton: {
        backgroundColor: projectPalete.color9,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    imagePreview: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        margin: 20,
        borderRadius: 60,
    },
    footer: {
        paddingBottom: 20,
    },
    laterText: {
        textAlign: 'center',
        marginTop: 10,
        color: '#fff',
    },
});