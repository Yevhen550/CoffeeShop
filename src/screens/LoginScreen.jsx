import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    {/* Add your login form here */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default LoginScreen;
