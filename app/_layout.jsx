// import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { ThemeProvider } from "../src/context/ThemeContext";
import { UserProvider } from "../src/context/user/userProvider";
import { toastConfig } from "../src/helpers/toastConfig";
import RootNavigator from "../src/navigation/RootNavigator";
import { store } from "../src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          {/* <NavigationContainer> */}
          <RootNavigator />
          <Toast config={toastConfig} />
          {/* </NavigationContainer> */}
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
}

// import { Stack } from "expo-router";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "./src/context/ThemeContext";
// // import { UserProvider } from "../src/context/user/userProvider";
// import Toast from "react-native-toast-message";
// import { toastConfig } from "./src/helpers/toastConfig";
// import { store } from "./src/redux/store";

// export default function RootLayout() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         {/* <UserProvider> */}
//         {/* Stack — головний навігаційний контейнер */}
//         <Stack
//           screenOptions={{
//             headerShown: false,
//           }}
//         />
//         <Toast config={toastConfig} />
//         {/* </UserProvider> */}
//       </ThemeProvider>
//     </Provider>
//   );
// }
