import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";
import ThemedHeader from "../ThemedHeader/ThemedHeader";

const CustomHeader = ({ showBack }) => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <ThemedHeader>
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color={palette.text} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="menu" size={28} color={palette.text} />
          </TouchableOpacity>
        )}
      </View>
    </ThemedHeader>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
  },
});

export default CustomHeader;
