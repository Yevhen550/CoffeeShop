import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ title: "Login" }}
    />
    <Stack.Screen
      name="RegistrationScreen"
      component={RegistrationScreen}
      options={{ title: "Registration" }}
    />
  </Stack.Navigator>
);

export default AuthStack;
