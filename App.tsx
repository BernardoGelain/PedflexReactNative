import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { lightTheme } from "./src/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar />
      <Routes />
    </ThemeProvider>
  );
}
