import { Route, Routes } from "react-router-dom";
import "./App.css";

import { lazy } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
