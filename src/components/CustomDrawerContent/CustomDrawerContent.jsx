import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";
import { ROUTES } from "../../navigation/routes";
import CustomButton from "../CustomButton/CustomButton";

const CustomDrawerContent = (props) => {
  const insets = useSafeAreaInsets();
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  const navigateTo = (route, screen) => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(route, { screen });
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: palette.background }]}
      edges={["top", "left", "right"]}
    >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.wrapper}>
          <View style={styles.topButtons}>
            <CustomButton
              title="Login"
              onPress={() => navigateTo(ROUTES.AUTH_STACK, ROUTES.LOGIN_SCREEN)}
              theme={theme}
            />
            <CustomButton
              title="Registration"
              onPress={() => navigateTo(ROUTES.AUTH_STACK, ROUTES.REGISTRATION)}
              theme={theme}
            />
          </View>
          <View
            style={[
              styles.bottomButtons,
              { paddingBottom: Math.max(insets.bottom, 20) },
            ]}
          >
            <CustomButton
              title="Profile"
              onPress={() => navigateTo(ROUTES.BOTTOM_TABS, ROUTES.PROFILE)}
              theme={theme}
            />
            <CustomButton
              title="Home"
              onPress={() => navigateTo(ROUTES.BOTTOM_TABS, ROUTES.HOME)}
              theme={theme}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  topButtons: {
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomButtons: {
    gap: 12,
    paddingHorizontal: 20,
  },
});

export default CustomDrawerContent;
