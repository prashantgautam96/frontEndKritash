import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import axios, { Axios } from 'axios'
import { Link, NavLink } from "react-router-dom";

const NavLinks = tw.div`inline-block`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "Our Portfolio",
  headingHtmlComponent = (
    <>
      We've done some <span tw="text-primary-500">akhsharsala projects.</span>
    </>
  ),
  description = "Aksharshala, with the principle of “Each One, Teach One.” to unveil the education to the children hailing from the underprivileged sections of society such as the kids of the labours and workers in the institute itself. Teaching the kids , was a challenge to our volunteers. Still, their zeal to thwart the challenges proved to gather more kids towards Aksharshala.",
  linkText = "View all Projects",
  cardLinkText = "Read Case Study",
  textOnLeft = false
}) => {
 

 
  const [posts,setPosts]= useState([]);
  
    useEffect(()=>{
      const fetchPost = async ()=>{
        const res= await axios.get("/akshar")
        console.log(res)
        console.log("hello check")
        setPosts(res.data)
      }
      fetchPost();
    },[])

  const img="https://kritashiitjammu.files.wordpress.com/2020/08/20180313_182046.jpg?w=715"

  const cards = [
    
    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2020/08/20180313_182046.jpg?w=715",
      company: "IIM",
      type: "Book Campaign",
      title: "Book Campaign is Done ",
      durationText: "90 Days Campaign",
      locationText: "Jagti"
    },
    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2020/08/whatsapp-image-2020-08-14-at-1.04.42-pm.jpeg?w=715",
      company: "Adani Foundation",
      type: "Plantation",
      title: "Ranking #1 in whole twitter",
      durationText: "180 Day Campaign",
      locationText: "kashmir"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description}</HeadingDescription>
              <PrimaryLink><Link to={'/accha'}>
              {linkText} 
              </Link>
                <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {posts.slice(3,5).map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={img} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{posts.place}</CardCompany>
                    <CardType>{posts.subject}</CardType>
                  </CardHeader>
                  <CardTitle>{posts.desc}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      {/* <TimeIcon /> {posts.link} */}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      {/* <LocationIcon /> {card.photo} */}
                    </CardMetaFeature>
                  </CardMeta>

                  <CardAction>
                    <Link to={`/accha`}>Details</Link>
                   
                    </CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
         
          
             
          
        </ThreeColumn>
      </Content>
    </Container>
  );
};
