import { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// utils
import { addUserInfos } from '../utils/user_db';
import { pickAndSaveImage } from '../utils/imagePicker';
import { saveToStorage } from '../utils/storage';

// style
import { projectPalete } from '../assets/css/colors';
import { registerStyles } from '../assets/css/registerStyles';

export default function Register({ navigation }) {
    const [imageUri, setImageUri] = useState(null);
    const [enterpriseName, setEnterpriseName] = useState("");
    const [name, setName] = useState("");

    return (
        <SafeAreaView style={registerStyles.safeArea}>
            <View style={registerStyles.content}>
                <Text style={registerStyles.title}>Cadastro</Text>

                <Button
                    title={imageUri ? 'Trocar Imagem' : 'Selecionar Imagem'}
                    color={projectPalete.color9}
                    onPress={() => pickAndSaveImage(setImageUri)}
                />

                {imageUri && (
                    <Image source={{ uri: imageUri }} style={registerStyles.imagePreview} />
                )}

                <TextInput
                    style={{ ...registerStyles.input, marginTop: 20 }}
                    value={enterpriseName}
                    onChangeText={setEnterpriseName}
                    placeholder="Nome da empresa"
                />
                <TextInput
                    style={registerStyles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Seu nome"
                />
            </View>

            <View style={registerStyles.footer}>
                <Button
                    title="Registrar"
                    color={projectPalete.color9}
                    disabled={!enterpriseName || !name}
                    onPress={() => {
                        addUserInfos({
                            name: name,
                            enterprise_name: enterpriseName,
                            image_uri: imageUri || ""
                        });

                        navigation.replace("HomeTabs");
                    }}
                />
                <TouchableOpacity
                    onPress={async() => {
                        await saveToStorage('hasSeenRegister', true);

                        navigation.replace("HomeTabs");
                    }}
                >
                    <Text style={registerStyles.laterText}>Depois</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}