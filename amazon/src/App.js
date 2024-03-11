import "./App.css";
import HomePage from "./HomePage/HomePage";
import PasswordPage from "./component/Header/Navbar/SignIn/PasswordPage";
// import Header from "./component/Header/index";
// import Footer from "./component/Footer/Footer";
import CreateAccount from "./component/Header/Navbar/SignIn/CreateAccount";
import SignIn from "./component/Header/Navbar/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import ProductComponent from "./HomePage/ApiComponent/Api/ProductComponent";
// import CreateAccount from "./component/Header/Navbar/SignIn/CreateAccount";
function App() {
  return (
    <>
      <ProductComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/passwordPage" element={<PasswordPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
