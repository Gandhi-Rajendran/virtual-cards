import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";
import Your from "./pages/your";
import All from "./pages/all";
import Blocked from "./pages/blocked";
import Header from "./components/header";
import { Main } from "./layout/layout.styled";
import Layout from "./layout";

const App = () => {
  const check = lightTheme;
  return (
    <ThemeProvider theme={check}>
      <Router>
        <Layout>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Your />} />
              <Route path="/all" element={<All />} />
              <Route path="/blocked" element={<Blocked />} />
            </Routes>
          </Main>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
