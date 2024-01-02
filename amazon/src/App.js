import "./App.css";
import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/SecondNavbar/Navbar";
import SideBar from "./component/SideDrawer/SideBar";
import CarouselComp from "./component/Carousel";
function App() {
  return (
    <>
      <MainNavbar />
      <Navbar />
      <SideBar />
      <CarouselComp />
    </>
  );
}

export default App;
