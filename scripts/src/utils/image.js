import * as FileSystem from 'expo-file-system';
import { getFromStorage, saveToStorage } from './storage';

const IMAGE_KEY = '@user_profile_image';

async function saveImage(uri) {
    // Gera um nome de arquivo a partir da URI original
    const fileName = uri.split('/').pop();
    const destPath = FileSystem.documentDirectory + fileName;

    // Copia para o storage interno do app
    await FileSystem.copyAsync({ from: uri, to: destPath });
    // Persiste a nova URI
    await AsyncStorage.setItem(IMAGE_KEY, destPath);
    return destPath;
}

async function loadImage() {
    // Retorna a URI salva (ou null se não houver)
    const saved = await AsyncStorage.getItem(IMAGE_KEY);
    return saved;
}

export { saveImage, loadImage };