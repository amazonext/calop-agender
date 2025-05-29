import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveToStorage(key, newValue, options = {}) {
    const { append = false, uniqueBy } = options;

    try {
        if (append) {
            const existingData = await AsyncStorage.getItem(key);
            let current = existingData ? JSON.parse(existingData) : [];

            if (!Array.isArray(current)) {
                console.warn(`O valor atual em "${key}" não é um array. Abortando operação...`);
                return current;
            }

            if (uniqueBy) {
                const exists = current.some(item => item?.[uniqueBy] === newValue?.[uniqueBy]);
                if (exists) {
                    console.warn(`O item com ${uniqueBy}=${newValue?.[uniqueBy]} já existe.`);
                    return current;
                }
            }

            const updated = [...current, newValue];
            await AsyncStorage.setItem(key, JSON.stringify(updated));
            return updated;
        } else {
            const valueToStore = typeof newValue === 'string'
                ? newValue
                : JSON.stringify(newValue);

            await AsyncStorage.setItem(key, valueToStore);
            return newValue;
        }
    } catch (error) {
        console.error(`Erro ao salvar dados na chave "${key}" `, error);
        return null;
    }
}

async function getItemFromStorage(key) {
    try {
        const rawValue = await AsyncStorage.getItem(key);
        if (rawValue === null) return null;

        try {
            return JSON.parse(rawValue);
        } catch {
            return rawValue;
        }
    } catch (error) {
        console.error(`Erro ao ler a chave "${key}" do AsyncStorage `, error);
        return null;
    }
}

function removeItemFromStorage(key) {
    AsyncStorage.removeItem(key);
}

export { saveToStorage, getItemFromStorage, removeItemFromStorage };