import { Route, Routes } from "react-router-dom";
import "./App.css";

import { lazy } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddNewPatient from "./pages/NewPatient";
import TotalPatients from "./pages/totalPatients";
import PersonAssistancePage from "./pages/Personal-assistantpage";
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="add-patient" element={<AddNewPatient />} />
          <Route path="total-patient" element={<TotalPatients />} />
          <Route path="assistant" element={<PersonAssistancePage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
