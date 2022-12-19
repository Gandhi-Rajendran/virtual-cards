import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";

const App = () => {
  const theme = lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>;
    </ThemeProvider>
  );
};

export default App;
