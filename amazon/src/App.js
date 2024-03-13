import "./App.css";
import HomePage from "./HomePage/HomePage";
import PasswordPage from "./component/Header/Navbar/SignIn/PasswordPage";
import MainContentBody from "./component/Body/MainContentBody";
// import Header from "./component/Header/index";
import Footer from "./component/Footer/Footer";
import CreateAccount from "./component/Header/Navbar/SignIn/CreateAccount";
import SignIn from "./component/Header/Navbar/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import ProductComponent from "./HomePage/ApiComponent/Api/ProductComponent";
import Header from "./component/Header";
// import CreateAccount from "./component/Header/Navbar/SignIn/CreateAccount";
function App() {
  return (
    <>
      <Header />

      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/passwordPage" element={<PasswordPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ProductComponent" element={<ProductComponent />} />
      </Routes>
      {/* <MainContentBody /> */}
      <Footer />
    </>
  );
}

export default App;
