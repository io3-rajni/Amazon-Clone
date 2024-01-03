import "./App.css";
import MainNavbar from "./component/Navbar/MainNavbar";
import Navbar from "./component/SecondNavbar/Navbar";
import SideBar from "./component/SideDrawer/SideBar";
import CarouselComp from "./component/Carousel";
import Cards from "./component/Cards/Cards";
function App() {
  return (
    <>
      <MainNavbar />
      <Navbar />
      <SideBar />
      <CarouselComp />
      <Cards />
    </>
  );
}

export default App;
