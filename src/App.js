import Login from "./components/Login Page/LogIn";
import Register from "./components/Register Page/Register";
import Patient from "./components/Patient/Patient";
import { Route, Routes } from "react-router-dom";


function App() {
  return <Routes>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/patient" element={<Patient/>}/>
  </Routes> 

}

export default App;
