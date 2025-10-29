import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ROUTES } from "./routes";

import Colors from "../constants/Colors";
import { ThemeContext } from "../context/ThemeContext";
import CartScreen from "../screens/CartScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProductStackNavigator from "./stack/ProductStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.secondary,
        tabBarInactiveTintColor: palette.subText,
        tabBarStyle: [styles.tabBar, { backgroundColor: palette.primary }],
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: "Головна",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PRODUCT_MENU}
        component={ProductStackNavigator}
        options={{
          tabBarLabel: "Меню",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITE}
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Обране",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Профіль",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarLabel: "Корзина",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="opencart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 5,
  },
});

export default BottomTabs;
