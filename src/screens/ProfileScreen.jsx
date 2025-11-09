import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import { useUser } from "../context/user/useUser";
import { ROUTES } from "../navigation/routes";

export default function ProfileScreen() {
  const { user } = useUser();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value={user?.name || ""}
      />
      <Text>Email</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value={user?.email || ""}
      />

      <CustomButton
        title="Go to Location"
        onPress={() => navigation.navigate(ROUTES.LOCATION)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});
