import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Followers } from './src/screens/Followers';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Profile from './src/screens/Profile';
import { FollowPage } from './src/screens/FollowPage';

export type StackList = {
  Home: undefined;
  Followers: undefined;
  Profile: undefined;
  Follow_Page: undefined;
};

const Stack =
  createNativeStackNavigator<StackList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Followers"
          component={Followers}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Follow_Page"
          component={FollowPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
