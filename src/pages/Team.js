import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Ourteam from "components/cards/ProfileThreeColGrid";

import ContactUs from "./ContactUs";

const HighlightedText = tw.span`text-primary-500`

export default () => (
  <AnimationRevealPage>
    <Hero />

    {/* team section info */}
    
    <HighlightedText>
        2020
    </HighlightedText>
    <Ourteam/>
    <HighlightedText>
        2019
    </HighlightedText>

    <Ourteam/>
   <HighlightedText>
        2018
    </HighlightedText>
  
 
    
    <Footer />
    
  </AnimationRevealPage>
);
