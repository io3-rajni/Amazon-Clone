import React from "react";
import CarouselComp from "../CommonComponent/Carousel";
import Cards from "../CommonComponent/Cards/Cards";
import {
  CardsSection,
  secondCardSection,
  picksShoesJewellery,
  cardSectionFourth,
} from "../DataConfig";
const MainContentBody = () => {
  return (
    <>
      <CarouselComp />
      <Cards
        CardsSection={CardsSection}
        secondCardSection={secondCardSection}
        picksShoesJewellery={picksShoesJewellery}
        cardSectionFourth={cardSectionFourth}
      />
    </>
  );
};

export default MainContentBody;
