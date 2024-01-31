import React from "react";
import MainContentBody from "../component/Body/MainContentBody";
import Header from "../component/Header/index";
import Footer from "../component/Footer/Footer";
import { CardsSection, secondCardSection } from "../component/DataConfig";
import Cards from "../component/CommonComponent/Cards/Cards";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainContentBody />
      <Footer />
      <Cards
        CardsSection={CardsSection}
        secondCardSection={secondCardSection}
      />
    </>
  );
};

export default HomePage;
