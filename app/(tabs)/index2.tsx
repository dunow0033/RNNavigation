import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppScreen from "../../screens/AppScreen";
import AboutScreen from "../../screens/AboutScreen";

const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>

      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae"
        },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: "#e8e4f3"
        },
      }}>
        <Stack.Screen 
          name="Home" component={AppScreen} options={{
          title:"Welcome Home",
          
        }} />
        <Stack.Screen 
          name="About" 
          component={AboutScreen} 
          initialParams={{ name: "Guest"}}
          // options={({ route }) => ({
          //   title: route.params.name
          // })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
