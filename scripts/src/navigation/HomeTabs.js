import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image, Keyboard, TouchableOpacity } from 'react-native';

// Telas
import Home from '../screens/Home';
import AddScheduling from '../screens/AddScheduling';
import MySchedulings from '../screens/MySchedulings';

// Cores
import { projectPalete } from '../assets/css/colors';

// navigation
const Tab = createBottomTabNavigator();
const ROUTES = {
    HOME: 'Tela inicial',
    ADD: 'Criar serviço',
    MY: 'Agendar serviço',
    SETTINGS: 'Settings',
};

export default function HomeTabs({ navigation }) {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <Tab.Navigator
            initialRouteName={ROUTES.HOME}
            screenOptions={({ route }) => ({
                headerTitle: "Calop Agender",
                headerTintColor: projectPalete.color3,
                headerStyle: { backgroundColor: projectPalete.color1 },
                headerLeft: () => (
                    <Image
                        source={require('../assets/images/logo-app.png')}
                        style={{ width: 30, height: 30, marginLeft: 10 }}
                    />
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SETTINGS)}>
                        <Ionicons name="settings" size={30} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                tabBarActiveTintColor: projectPalete.color1,
                tabBarInactiveTintColor: projectPalete.color3,
                tabBarStyle: {
                    backgroundColor: "#F4ECDD",
                    display: isKeyboardVisible ? 'none' : 'flex'
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === ROUTES.HOME) iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === ROUTES.ADD) iconName = focused ? 'add-circle' : 'add-circle-outline';
                    else if (route.name === ROUTES.MY) iconName = focused ? 'calendar' : 'calendar-outline';
                    return <Ionicons name={iconName} size={focused ? size + 4 : size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={ROUTES.ADD} component={AddScheduling} />
            <Tab.Screen name={ROUTES.HOME} component={Home} />
            <Tab.Screen name={ROUTES.MY} component={MySchedulings} />
        </Tab.Navigator>
    );
}