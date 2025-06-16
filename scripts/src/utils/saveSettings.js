import { getItemFromStorage, saveToStorage } from "./storage";

export async function saveSettings(changes) {
    const settings = await getItemFromStorage('settings');

    for (const [key, value] of Object.entries(changes)) {
        settings[key] = value;
    }

    await saveToStorage('settings', settings);
}