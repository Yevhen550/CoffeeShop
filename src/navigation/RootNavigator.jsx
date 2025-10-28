import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigator from "./DrawerNavigator";
import { ROUTES } from "./routes";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ROUTES.DRAWER_NAVIGATOR}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name={ROUTES.DRAWER_NAVIGATOR}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
