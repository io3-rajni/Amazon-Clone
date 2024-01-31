import React from "react";
import CarouselComp from "../CommonComponent/Carousel";
import Cards from "../CommonComponent/Cards/Cards";
import { CardsSection, secondCardSection } from "../DataConfig";
const MainContentBody = () => {
  return (
    <>
      <CarouselComp />
      <Cards
        CardsSection={CardsSection}
        secondCardSection={secondCardSection}
      />
    </>
  );
};

export default MainContentBody;
