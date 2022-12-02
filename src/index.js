import ReactDOM from "react-dom";
import App from "./App";
import { DataContextProvider } from "./contexts/DataContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
  <DataContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </DataContextProvider>,
  document.querySelector(".root")
);
