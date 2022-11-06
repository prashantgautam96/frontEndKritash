import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import axios, { Axios } from 'axios'
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Links = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  

  const [posts,setPosts]= useState([]);

  useEffect(()=>{
    const fetchPost = async ()=>{
      const res= await axios.get("/events")
      // console.log(res)
      setPosts(res.data)
    }
    fetchPost();
  },[])

  // const fetchData =()=>{
  //   fetch("http://localhost:5000/api/posts/").then((response) =>{
  //     return response.json();
  //   }).then((data=>{
  //     // console.log(data);
  //     let frontCol= data.results;
  //     console.log(frontCol);


  //     setPosts(frontCol)
  //   }))

   
  // }
  // useEffect(()=>{
  //   fetchData();
  // })

 
  const img="https://kritashiitjammu.files.wordpress.com/2020/10/heritage-visit.jpg?w=1024"
  const cards = [
    {
      imageSrc:
      "https://kritashiitjammu.files.wordpress.com/2022/01/whatsapp-image-2022-01-14-at-9.30.48-pm-1-e1642192291931.jpeg",
     
      subtitle: "Jammu",
      title: "Cloth Donation",
      description:
        "Kritash On 20th December IIT Jammu donated 300 clothes to the construction workers who are building the college to keep them this freezing winter under the ‘Joy of Giving Week’.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2020/10/heritage-visit.jpg?w=1024",
      subtitle: "kashmir",
      title: "Rock In Rio, Upstate",
      description:
        "IIT Jammu under the banner of Social Welfare and Outreach organized a Heritage Visit of Mubarak Mandi Complex and Dogra Art Museum.…",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2022/01/whatsapp-image-2022-01-14-at-9.30.48-pm-1-e1642192291931.jpeg",
      subtitle: "Jammu",
      title: "Cloth Donation",
      description:
        "Kritash On 20th December IIT Jammu donated 300 clothes to the construction workers who are building the college to keep them this freezing winter under the ‘Joy of Giving Week’. ",
      url: "https://timerse.com"
    }
  ];
  const imageAPI = `${process.env.REACT_APP_BACKEND_URL}/image`;
  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Events</HeadingTitle>
          <HeadingDescription>
            Here are some of the most popular events in New York City curated by professionals.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {/* {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>See Event Details</Link>
              </Details>
            </Card>
          ))} */}
          {posts.slice(0,3).map((post, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={new URL(`${imageAPI}/${post.photo}`).href} />
              {/* <img
                    src={new URL(`${imageAPI}/${post.photo}`).href}
                    alt={post.username}
                  /> */}
              <Details>
                <Subtitle>{post.username}</Subtitle>
                <Title>{post.title}</Title>
                <Description>{ReactHtmlParser(post.blog)}</Description>
                <Links>
                <Link to={`/single/${post._id}`}>
                     See More
                </Link>
                </Links>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
