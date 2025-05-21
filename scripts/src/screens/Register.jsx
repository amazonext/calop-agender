import { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// utils
import { addUserInfos } from '../utils/user_db';
import { pickAndSaveImage } from '../utils/imagePicker';
import { saveToStorage } from '../utils/storage';
import initializeApp from '../utils/initializeApp';

// style
import { projectPalete } from '../assets/css/colors';
import { registerStyles } from '../assets/css/registerStyles';

export default function Register({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const [enterpriseName, setEnterpriseName] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({ name: '' });

    const handleRegister = () => {
        let hasError = false;
        const newErrors = { name: '' };

        if (!name.trim()) {
            newErrors.name = "Seu nome é obrigatório";
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            addUserInfos({
                name: name.trim(),
                enterprise_name: enterpriseName.trim(),
                image_uri: imageUri || ""
            });

            navigation.replace("HomeTabs");
        }
    };

    return (
        <SafeAreaView style={registerStyles.safeArea}>
            <View style={registerStyles.content}>
                <Text style={registerStyles.title}>Cadastro</Text>

                <TouchableOpacity
                    style={registerStyles.cameraButton}
                    onPress={() => pickAndSaveImage(setImageUri)}
                >
                    <Ionicons
                        name="image-outline"
                        size={100}
                        color={projectPalete.color3 + "90"}
                    />
                    <Text style={registerStyles.cameraText}>Adicione sua foto de perfil</Text>
                </TouchableOpacity>

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={registerStyles.imagePreview} />
                )}

                <TextInput
                    style={{ ...registerStyles.input, marginTop: 20 }}
                    value={enterpriseName}
                    onChangeText={text => {
                        setEnterpriseName(text);
                        if (errors.enterprise) setErrors({ ...errors, enterprise: '' });
                    }}
                    maxLength={30}
                    placeholder="Nome da empresa (opcional)"
                />
                {errors.enterprise !== '' && <Text style={{ color: 'red' }}>{errors.enterprise}</Text>}

                <TextInput
                    style={registerStyles.input}
                    value={name}
                    onChangeText={text => {
                        setName(text);
                        if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    maxLength={15}
                    placeholder="Seu nome"
                />
                {errors.name !== '' && <Text style={{ color: 'red' }}>{errors.name}</Text>}
            </View>

            <View style={registerStyles.footer}>
                <Button
                    title="Registrar"
                    color={projectPalete.color9}
                    onPress={handleRegister}
                />
                <TouchableOpacity
                    onPress={async () => {
                        await saveToStorage('hasSeenRegister', true);

                        navigation.replace("HomeTabs");
                        initializeApp();
                    }}
                >
                    <Text style={registerStyles.laterText}>Depois</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}