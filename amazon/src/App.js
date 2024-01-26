import "./App.css";
import HomePage from "./HomePage/HomePage";
// import Header from "./component/Header/index";
// import Footer from "./component/Footer/Footer";

import SignIn from "./component/Header/Navbar/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
