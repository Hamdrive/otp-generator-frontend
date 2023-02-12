import { Route, Router } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Verify } from "./components/Verify";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <Router>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Router>
  );
}

export default App;
