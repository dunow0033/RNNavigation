import 'react-native-gesture-handler'
import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from "../../screens/DashboardScreen";
import SettingsScreen from "../../screens/SettingsScreen";

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator();

export default function HomeScreen() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen} options = {{ 
                    title: "My Dashboard",
                    drawerLabel: "Dashboard label",
                    drawerActiveTintColor: "#333",
                    drawerActiveBackgroundColor: "lightblue",
                    drawerContentStyle: {
                        backgroundColor: "#c6cbef"
                    }
                  }} 
                />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
