import { useContext } from "react";
import { StyleSheet, Switch, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isEnabled = theme === "dark";
  const palette = Colors[theme];

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{
          false: palette.switchTrack,
          true: palette.primary,
        }}
        thumbColor={isEnabled ? palette.switchThumb : palette.switchThumb}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
});

export default ThemeSwitcher;
