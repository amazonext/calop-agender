import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Telas
import Home from "./src/screens/Home";
import AddSchedule from "./src/screens/AddSchedule";
import MySchedules from "./src/screens/MySchedules";

// Cores
import { projectPalete } from './src/assets/css/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: projectPalete.color1,
          tabBarInactiveTintColor: projectPalete.color3,
          tabBarStyle: { backgroundColor: projectPalete.color2 },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Tela inicial') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Adicionar agendamento') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Agendamentos') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }

            return <Ionicons
              name={iconName}
              size={focused ? size + 4 : size}
              color={color}
            />;
          },
        })}
      >
        <Tab.Screen name="Adicionar agendamento" component={AddSchedule} />
        <Tab.Screen name="Tela inicial" component={Home} />
        <Tab.Screen name="Agendamentos" component={MySchedules} />
      </Tab.Navigator>

      <StatusBar
        animated={true}
        backgroundColor={projectPalete.color1}
      />
    </NavigationContainer>
  );
}