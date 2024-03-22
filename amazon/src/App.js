import "./App.css";
import HomePage from "./HomePage/HomePage";
import PasswordPage from "./component/Header/Navbar/SignIn/PasswordPage";
import Footer from "./component/Footer/Footer";
import CreateAccount from "./component/Header/Navbar/SignIn/CreateAccount";
import SignIn from "./component/Header/Navbar/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import ProductComponent from "./HomePage/ApiComponent/Api/ProductComponent";
import Header from "./component/Header";
import CausalWearApi from "./HomePage/ApiComponent/Api/CausalWearApi";
import DetailPage from "./component/DetailPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/passwordPage" element={<PasswordPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ProductComponent" element={<ProductComponent />} />
        <Route path="/CausalWearApi" element={<CausalWearApi />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>

      <Footer />
      {/* <DetailPage /> */}
    </>
  );
}

export default App;
