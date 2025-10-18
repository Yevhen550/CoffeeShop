import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "./src/context/ThemeContext";
// import { UserProvider } from "../src/context/user/userProvider";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/helpers/toastConfig";
import { store } from "./src/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {/* <UserProvider> */}
        {/* Stack — головний навігаційний контейнер */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
        <Toast config={toastConfig} />
        {/* </UserProvider> */}
      </ThemeProvider>
    </Provider>
  );
}
