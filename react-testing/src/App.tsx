import "./App.css";
import Application from "./components/application/Application";
import { AppProviders } from "./components/providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
      </div>
    </AppProviders>
  );
}

export default App;
