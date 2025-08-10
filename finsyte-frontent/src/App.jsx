import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Keep this OUTSIDE <Routes> */}
      <ToastContainer position="top-right" theme="colored" />
    </>
  );
};

export default App;
