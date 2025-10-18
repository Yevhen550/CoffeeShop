import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7E7DC",
      }}
    >
      <Text style={{ fontSize: 22, color: "#C67C4E" }}>☕ CoffeeStore</Text>
      <Link href="/product" asChild>
        <Button title="Go to Product Page" />
      </Link>
    </View>
  );
}
