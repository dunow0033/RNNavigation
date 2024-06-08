import { Image, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppScreen from "../../screens/AppScreen";
import AboutScreen from "../../screens/AboutScreen";

const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="About" component={AboutScreen} 
                initialParams={{ name: "Guest"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
