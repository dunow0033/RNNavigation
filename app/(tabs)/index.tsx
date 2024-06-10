import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from "../../screens/CourseListScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import AboutStack from "./AppStack";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function HomeScreen() {
    return (
        <NavigationContainer independent={true}>
           <Tab.Navigator screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            tabBarActiveTintColor: "purple",
           }}>
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "My profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color} />
                    ),
                    tabBarBadge: 3
                }}
                />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="About Stack" component={AboutStack} options={{
                    headerShown: false
                }}
            />
           </Tab.Navigator>
        </NavigationContainer>
    )
}
