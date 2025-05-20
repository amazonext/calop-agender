import * as ImagePicker from 'expo-image-picker';
import { saveImage } from '../helpers/image';
import { Alert } from 'react-native';

// solicita permissão para acessar a galeria e seleciona uma imagem
export const pickImage = async () => {
    console.log('Solicitando permissão para acessar a galeria...');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(`Status da permissão: ${status}`);

    if (status !== 'granted') {
        console.warn('Permissão negada.');
        Alert.alert('Permissão negada', 'Você precisa permitir acesso à galeria.');
        return null;
    }

    console.log('Abrindo a galeria para seleção de imagem...');
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    });

    console.log('Resultado da seleção:', result);

    if (result.canceled) {
        console.warn('Seleção de imagem cancelada pelo usuário.');
        Alert.alert('Seleção cancelada', 'Nenhuma imagem foi selecionada.');
        return null;
    }

    console.log(`Imagem selecionada: ${result.assets[0].uri}`);
    return result.assets[0].uri;
};

// salva a imagem no storage e retorna a URI salva
export const savePickedImage = async (uri) => {
    if (!uri) {
        console.warn('Nenhuma URI fornecida para salvar.');
        return null;
    }

    console.log(`Salvando imagem com URI: ${uri}`);
    const localUri = await saveImage(uri);
    console.log(`Imagem salva com sucesso. URI local: ${localUri}`);
    return localUri;
};

// função para escolher e salvar uma imagem
export const pickAndSaveImage = async (setImageUri) => {
    console.log('Iniciando processo de escolha e salvamento de imagem...');
    const pickedImageUri = await pickImage();

    if (pickedImageUri) {
        console.log('Imagem escolhida com sucesso. Salvando...');
        const savedUri = await savePickedImage(pickedImageUri);
        console.log(`Imagem salva. URI final: ${savedUri}`);
        setImageUri(savedUri);
    } else {
        console.warn('Nenhuma imagem foi escolhida.');
    }
};