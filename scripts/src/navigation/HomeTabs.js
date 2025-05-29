import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';

// Telas
import Home from '../screens/Home';
import AddScheduling from '../screens/AddScheduling';
import MySchedulings from '../screens/MySchedulings';

// Cores
import { projectPalete } from '../assets/styles/colors';

// hooks
import useKeyboardVisible from '../hooks/useKeyboardVisible';

// navigation
const Tab = createBottomTabNavigator();
const ROUTES = {
    HOME: 'Tela inicial',
    ADD: 'Criar serviço',
    MY_SCHEDULINGS: 'Agendar serviço',
    SETTINGS: 'Settings',
    TESTS: 'Testes',
};

export default function HomeTabs({ navigation }) {
    const keyboardVisible = useKeyboardVisible();

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
                    display: keyboardVisible ? 'none' : 'flex'
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === ROUTES.HOME) iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === ROUTES.ADD) iconName = focused ? 'add-circle' : 'add-circle-outline';
                    else if (route.name === ROUTES.MY_SCHEDULINGS) iconName = focused ? 'calendar' : 'calendar-outline';
                    return <Ionicons name={iconName} size={focused ? size + 4 : size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={ROUTES.ADD} component={AddScheduling} />
            <Tab.Screen name={ROUTES.HOME} component={Home} />
            <Tab.Screen name={ROUTES.MY_SCHEDULINGS} component={MySchedulings} />
        </Tab.Navigator>
    );
}