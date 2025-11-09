import { createStackNavigator } from "@react-navigation/stack";
import LocationScreen from "../../screens/LocationScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { ROUTES } from "../routes";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.PROFILE}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    <Stack.Screen name={ROUTES.LOCATION} component={LocationScreen} />
  </Stack.Navigator>
);

export default ProfileStack;
