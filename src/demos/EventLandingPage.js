import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Blog2 from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import Footer from "components/footers/SimpleFiveColumn.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Ourteam from "components/cards/ProfileThreeColGrid";
import PortfolioTwoCardsWithImage from "components/cards/PortfolioTwoCardsWithImage";
import Aksharsala from "pages/Aksharsala";
import { Link } from "react-router-dom";
const HighlightedText = tw.span`text-primary-500`;



export default () => (
  <AnimationRevealPage>
    <Hero />
    
    <Features />
    <PortfolioTwoCardsWithImage/>
    {/* <Blog2/> */}
    <MainFeature
        heading={<>Do Blood donations when needed <HighlightedText>Socialwelfare</HighlightedText></>}
      />
    <Blog />
    <Testimonial />
    
    <Ourteam/>
    <TwoColContactUsWithIllustration />
    <FAQ/>
    <Footer />
    
  </AnimationRevealPage>
);
