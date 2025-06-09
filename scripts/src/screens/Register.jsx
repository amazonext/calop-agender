import { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

// utils
import { addUserInfos } from '../utils/user_db';
import { pickAndSaveImage } from '../utils/imagePicker';
import { saveToStorage } from '../utils/storage';
import initializeApp from '../utils/initializeApp';

// style
import { projectPalete } from '../assets/styles/colors';
import { registerStyles } from '../assets/styles/registerStyles';

export default function Register({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const [enterpriseName, setEnterpriseName] = useState("Ed's Inc");
    const [name, setName] = useState("Ed");
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
                image_uri: imageUri
            });

            navigation.replace("HomeTabs");
        }
    };

    return (
        <View style={registerStyles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={registerStyles.form}>
                        <View>
                            <TouchableOpacity
                                style={registerStyles.photoButton}
                                onPress={() => pickAndSaveImage(setImageUri)}
                            >
                                <FontAwesome5
                                    name="upload"
                                    size={30}
                                    color={projectPalete.color3}
                                />
                                <Text style={registerStyles.photoText}>Adicionar foto de perfil</Text>
                            </TouchableOpacity>
                            {imageUri && (
                                <Image source={{ uri: imageUri }} style={registerStyles.imagePreview} />
                            )}
                        </View>
                        <View style={registerStyles.inputsGroup}>
                            <View style={registerStyles.inputs}>
                                <Text style={registerStyles.label}>
                                    Nome da empresa
                                    <Text style={{ color: '#00000050', fontWeight: 'normal' }}> (opcional)</Text>
                                </Text>
                                <View style={registerStyles.inputAndIcon}>
                                    <FontAwesome6
                                        name="building-user"
                                        size={25}
                                        style={registerStyles.icon}
                                    />
                                    <TextInput
                                        style={registerStyles.input}
                                        value={enterpriseName}
                                        onChangeText={text => {
                                            setEnterpriseName(text);
                                            if (errors.enterprise) setErrors({ ...errors, enterprise: '' });
                                        }}
                                        maxLength={30}
                                        placeholder="Digite o nome da sua empresa"
                                    />
                                </View>
                                {errors.enterprise !== '' ? null : <Text style={{ color: 'red' }}>{errors.enterprise}</Text>}
                            </View>
                            <View style={registerStyles.inputs}>
                                <Text style={registerStyles.label}>Seu nome</Text>
                                <View style={registerStyles.inputAndIcon}>
                                    <FontAwesome6
                                        name="user-large"
                                        size={25}
                                        style={registerStyles.icon}
                                    />
                                    <TextInput
                                        style={registerStyles.input}
                                        value={name}
                                        onChangeText={text => {
                                            setName(text);
                                            if (errors.name) setErrors({ ...errors, name: '' });
                                        }}
                                        maxLength={15}
                                        placeholder="Digite o seu nome"
                                    />
                                </View>
                                {errors.name !== '' && <Text style={{ color: 'red' }}>{errors.name}</Text>}
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                title="Registrar-se"
                                color={projectPalete.color14}
                                onPress={async () => {
                                    await saveToStorage('hasSeenRegister', true);
                                    initializeApp();
                                    handleRegister()
                                }}
                            />
                            {/* <TouchableOpacity
                                onPress={async () => {
                                    // initializeApp();
                                    await saveToStorage('hasSeenRegister', true);
                                    navigation.replace("HomeTabs");
                                }}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    marginTop: 16,
                                    color: '#fff',
                                }}>Ir para a Home</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}