import { useEffect, useState } from 'react';
import { getItemFromStorage } from '../utils/storage';

export function useSettings() {
    const [settings, setSettings] = useState();

    useEffect(() => {
        async function fetchData() {
            const settings = await getItemFromStorage('settings');
            setSettings(settings);
        }

        fetchData();
    }, []);

    return settings;
}