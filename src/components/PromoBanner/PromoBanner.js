import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const PromoBanner = ({ imageSource, text }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.banner} />
      <Text
        style={[
          styles.offer,
          {
            color: palette.white,
            backgroundColor:
              theme === "light" ? palette.secondary : palette.secondary,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 180,
  },
  offer: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});

export default PromoBanner;
