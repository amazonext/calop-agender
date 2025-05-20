import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

async function configureChannel({
    id = 'default',
    name = 'Default Channel',
    importance = Notifications.AndroidImportance.MAX,
    vibrationPattern = [0, 250, 250, 250],
    lightColor = '#FF231F7C',
} = {}) {
    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync(id, {
            name,
            importance,
            vibrationPattern,
            lightColor,
        });
    }
}

async function registerNotifications() {
    let token;
    if (!Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            console.warn('[❌] Permissão negada para notificações!');
            alert('Permissão negada para notificações!');
            return;
        }

        const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;

        token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    } else {
        console.warn('[⚠️] Dispositivo físico é necessário para testar notificações push');
        alert('Você precisa de um dispositivo físico para testar notificações push.');
    }

    return token;
}

async function scheduleNotification({ title, body, data, date }) {
    const trigger = date instanceof Date ? date : { seconds: 15 };

    const notificationId = await Notifications.scheduleNotificationAsync({
        content: { title, body, data },
        trigger,
    });

    const scheduledAt = trigger instanceof Date
        ? trigger.toISOString()
        : new Date(Date.now() + trigger.seconds * 1000).toISOString();

    const newNotification = {
        id: notificationId,
        title,
        body,
        data,
        scheduledAt,
    };


    const existing = await AsyncStorage.getItem('scheduledNotifications');
    const saved = existing ? JSON.parse(existing) : [];
    saved.push(newNotification);
    await AsyncStorage.setItem('scheduledNotifications', JSON.stringify(saved));

    return notificationId;
}

async function listNotifications() {
    const saved = await AsyncStorage.getItem('scheduledNotifications');
    const parsed = saved ? JSON.parse(saved) : [];
    return parsed;
}

async function cancelNotification(notificationId) {
    await Notifications.cancelScheduledNotificationAsync(notificationId);

    const saved = await AsyncStorage.getItem('scheduledNotifications');
    const parsed = saved ? JSON.parse(saved) : [];
    const updated = parsed.filter(n => n.id !== notificationId);

    await AsyncStorage.setItem('scheduledNotifications', JSON.stringify(updated));
}

export {
    configureChannel,
    registerNotifications,
    scheduleNotification,
    listNotifications,
    cancelNotification
};