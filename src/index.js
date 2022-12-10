import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataContextProvider } from "./contexts/DataContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
  <StrictMode>
    <DataContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </DataContextProvider>
  </StrictMode>,
  document.querySelector(".root")
);
