import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';

// Telas
import Home from '../screens/Home';
import AddSchedule from '../screens/AddSchedule';
import MySchedules from '../screens/MySchedules';

// Cores
import { projectPalete } from '../assets/css/colors';

const Tab = createBottomTabNavigator();

export default function MainTabs({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName="Tela inicial"
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
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Ionicons name="settings" size={30} color="white" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                ),
                tabBarActiveTintColor: projectPalete.color1,
                tabBarInactiveTintColor: projectPalete.color3,
                tabBarStyle: { backgroundColor: "#F4ECDD" },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;
                    if (route.name === 'Tela inicial') iconName = focused ? 'home' : 'home-outline';
                    else if (route.name === 'Adicionar modelo') iconName = focused ? 'add-circle' : 'add-circle-outline';
                    else if (route.name === 'Agendamentos') iconName = focused ? 'calendar' : 'calendar-outline';
                    return <Ionicons name={iconName} size={focused ? size + 4 : size} color={color} />;
                },
                tabBarHideOnKeyboard: true
            })}
        >
            <Tab.Screen name="Adicionar modelo" component={AddSchedule} />
            <Tab.Screen name="Tela inicial" component={Home} />
            <Tab.Screen name="Agendamentos" component={MySchedules} />
        </Tab.Navigator>
    );
}