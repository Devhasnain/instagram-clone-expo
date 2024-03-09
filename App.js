import { SafeAreaProvider } from "react-native-safe-area-context";
import AppThemeProvider from "./components/ThemeProvider";
import StackNavigations from "./navigations/StackNavigations";
import SentryProvider from "./components/SentryProvider";
import { Provider } from "react-redux";
import store from "./lib/redux/store";

export default function App() {
  return (
    <SentryProvider>
      <AppThemeProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <StackNavigations />
          </Provider>
        </SafeAreaProvider>
      </AppThemeProvider>
    </SentryProvider>
  );
}
