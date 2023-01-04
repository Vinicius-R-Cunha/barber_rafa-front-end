import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataContextProvider } from "./contexts/DataContext";
import { UserContextProvider } from "./contexts/UserContext";
import { AuthModalContextProvider } from "./contexts/AuthModalContext";

ReactDOM.render(
  <StrictMode>
    <AuthModalContextProvider>
      <DataContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </DataContextProvider>
    </AuthModalContextProvider>
  </StrictMode>,
  document.querySelector(".root")
);
