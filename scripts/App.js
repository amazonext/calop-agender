import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// navigation
import HomeTabs from './src/navigation/HomeTabs';

// screens
import Onboarding from './src/screens/Onboarding';
import Settings from './src/screens/Settings';
import Register from './src/screens/Register';
import Splash from './src/components/Splash';
import Services from './src/screens/Services';

// colors
import { projectPalete } from './src/assets/styles/colors';
import Profile from './src/screens/Profile';

// navigation
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="HomeTabs" component={HomeTabs} />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: true,
                        headerTitle: 'Perfil',
                        headerTintColor: projectPalete.color3,
                        headerStyle: { backgroundColor: projectPalete.color1 }
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: true,
                        headerTitle: 'Configurações',
                        headerTintColor: projectPalete.color3,
                        headerStyle: { backgroundColor: projectPalete.color1 }
                    }}
                />
                <Stack.Screen
                    name="Services"
                    component={Services}
                    options={{
                        headerShown: true,
                        headerTitle: 'Serviços',
                        headerTintColor: projectPalete.color3,
                        headerStyle: { backgroundColor: projectPalete.color1 }
                    }}
                />
            </Stack.Navigator>
            <StatusBar style="light" animated={true} />
        </NavigationContainer>
    );
}