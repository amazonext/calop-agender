import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Telas
import Home from "./src/screens/Home";
import AddSchedule from "./src/screens/AddSchedule";
import MySchedules from "./src/screens/MySchedules";
import Settings from './src/screens/Settings'

// Assets
import { projectPalete } from './src/assets/css/colors';
import { Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {() => (
            <Tab.Navigator
              initialRouteName='Tela inicial'
              screenOptions={({ route, navigation }) => ({
                // header
                headerTitle: "Calop Agender",
                headerTintColor: projectPalete.color3,
                headerStyle: {
                  backgroundColor: projectPalete.color1
                },
                headerLeft: () => (
                  <Image
                    source={require('./src/assets/images/logo-app.png')}
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
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitle: "Configurações",
            headerTintColor: projectPalete.color3,
            headerStyle: {
              backgroundColor: projectPalete.color1
            },
          }}
        />
      </Stack.Navigator>

      <StatusBar
        animated={true}
        style='dark'
        backgroundColor={projectPalete.color1}
      />
    </NavigationContainer>
  );
}