import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Telas
import Home from "./src/screens/Home";
import AddSchedule from "./src/screens/AddSchedule";
import MySchedules from "./src/screens/MySchedules";
import About from "./src/screens/About.jsx";

// Cores
import { projectPalete } from './src/assets/css/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBorderColorAsync(projectPalete.color1);
    }
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Tarefas'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: projectPalete.color1,
          tabBarInactiveTintColor: projectPalete.color3,
          tabBarStyle: { backgroundColor: projectPalete.color2 },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Tarefas') {
              iconName = focused ? 'checkbox' : 'checkbox-outline';
            } else if (route.name === 'Adicionar agendamento') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Agendamentos') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
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
        <Tab.Screen name="Tarefas" component={Tasks} />
        <Tab.Screen name="Agendamentos" component={MySchedules} />
        <Tab.Screen name="Sobre" component={About} />
      </Tab.Navigator>

      <StatusBar
        animated={true}
        style='dark'
        backgroundColor={projectPalete.color1}
      />
    </NavigationContainer>
  );
}