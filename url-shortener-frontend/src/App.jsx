import { getApps } from "./utils/helper.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const CurrentApp = getApps();
  return (
    <>
      <Router>
        <CurrentApp />
      </Router>
    </>
  );
}

export default App;
