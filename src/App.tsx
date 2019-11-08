import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectRoutes from "./routes";
import useLocalStorage from "./hooks/use-localStorage";
import functions from "./functions";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

const App: React.FC = () => {
  const [storedValue, setValue] = useLocalStorage("businessDirectory", {});

  const initialize = () => {
    const { onBootstrap, isBootstrapped } = functions.app(storedValue);
    if (!isBootstrapped()) {
      onBootstrap(setValue);
    }
  };

  React.useEffect(() => {
    initialize();
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ProjectRoutes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
