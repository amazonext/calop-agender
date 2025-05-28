import * as FileSystem from 'expo-file-system';
import { getItemFromStorage, saveToStorage } from '../utils/storage';

const IMAGE_KEY = '@user_profile_image';

async function saveImage(uri) {
    try {
        const fileName = uri.split('/').pop();
        const destPath = FileSystem.documentDirectory + fileName;

        const fileInfo = await FileSystem.getInfoAsync(destPath);
        if (fileInfo.exists) return destPath;

        await FileSystem.copyAsync({ from: uri, to: destPath });

        await saveToStorage(IMAGE_KEY, destPath);
        return destPath;
    } catch (error) {
        console.error('Erro ao salvar a imagem:', error);
        return null;
    }
}

async function loadImage() {
    try {
        const saved = await getItemFromStorage(IMAGE_KEY);

        return saved;
    } catch (error) {
        console.error('Erro ao carregar a imagem:', error);
        return null;
    }
}

export { saveImage, loadImage };