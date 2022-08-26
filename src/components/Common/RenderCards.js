import React from "react";
import { CardDiv, BackDiv, FrontDiv } from "./Effects.style";
import { BUSINESS_CARDS } from "../../global-constants/businessCards";

export default function RenderCards() {

  return (
    <>
      {Object.keys(BUSINESS_CARDS).map((item) => (
        <CardDiv>
          <FrontDiv>
            <img src={BUSINESS_CARDS[item].front} alt="project description" />
          </FrontDiv>
          <BackDiv>
            <img src={BUSINESS_CARDS[item].back} alt="project description" />
          </BackDiv>
        </CardDiv>
      ))}
    </>
  );
}
