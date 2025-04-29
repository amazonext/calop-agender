import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// navigation
import MainTabs from './src/navigation/MainTabs';

// screens
import Onboarding from './src/screens/Onboarding';
import Settings from './src/screens/Settings';
import Register from './src/screens/Register';

// colors
import { projectPalete } from './src/assets/css/colors';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const value = await AsyncStorage.getItem('hasSeenOnboarding');
      setHasSeenOnboarding(value === 'true');
      setIsLoading(false);
    };
    checkOnboarding();
  }, []);

  if (isLoading) {
    return <ActivityIndicator style={{ flex: 1 }} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!hasSeenOnboarding ? (
          <Stack.Screen name="Onboarding">
            {(props) => (
              <Onboarding
                {...props}
                onFinish={() => {
                  setHasSeenOnboarding(true);
                  AsyncStorage.setItem('hasSeenOnboarding', 'true');
                  // props.navigation.replace('Main');
                }}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                headerShown: true,
                headerTitle: 'Configurações',
                headerTintColor: projectPalete.color3,
                headerStyle: {
                  backgroundColor: projectPalete.color1,
                },
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
      <StatusBar animated style="dark" backgroundColor={projectPalete.color1} />
    </NavigationContainer>
  );
}