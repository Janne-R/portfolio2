import GlobalStyle from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Nav />
    </ThemeProvider>
  );
}

export default App;
