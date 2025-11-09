import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/CustomDrawerContent/CustomDrawerContent";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import Colors from "../constants/Colors";
import SettingsScreen from "../screens/SettingsScreen";
import BottomTabs from "./BottomTabs";
import { ROUTES } from "./routes";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
        drawerStyle: {
          backgroundColor: Colors.primary,
          width: "85%",
        },
        drawerActiveTintColor: Colors.secondary,
        drawerInactiveTintColor: Colors.white,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        drawerContentStyle: {
          paddingVertical: 20,
          paddingHorizontal: 30,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name={ROUTES.BOTTOM_TABS}
        component={BottomTabs}
        options={{ title: "Головна" }}
      />
      {/* <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{ title: "Налаштування" }}
      /> */}
    </Drawer.Navigator>
  );
};

export default MainNavigator;
