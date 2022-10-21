import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import axios from "axios";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Links = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      console.log(res);
      console.log("hello check");
      setPosts(res.data);
    };
    fetchPost();
  }, []);
  const blogPosts = [
    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2020/08/whatsapp-image-2020-08-14-at-1.04.42-pm.jpeg?w=715",
      category: "Event Tips",
      title: "Finding Amazing Events Near You - Fast, Cheap & Free",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      category: "Hackethon",
      title: "The Top Rated Musical Concerts Worldwide in 2019",
      url: "https://reddit.com",
    },
    {
      imageSrc:
        "https://kritashiitjammu.files.wordpress.com/2020/08/whatsapp-image-2020-08-14-at-1.04.42-pm.jpeg?w=715",
      category: "Self Search",
      title: "This female band is making buzz all over the world",
      url: "https://timerse.com",
    },
  ];
  const imageAPI = `${process.env.REACT_APP_BACKEND_URL}/image`;
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Blog Posts</HeadingTitle>
          <HeadingDescription>
            Some amazing blog posts that are written by even more amazing
            people.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {/* {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link href={post.url}>Read Post</Link>
              </Card>
            </Column>
          ))} */}
          {posts.map((post, index) => {
            console.log(new URL(`${imageAPI}/${post.photo}`).href);
            return (
              <Column key={index}>
                <Card>
                  <img
                    src={new URL(`${imageAPI}/${post.photo}`).href}
                    alt={post.username}
                  />

                  <Category>{post.username}</Category>
                  <Link to={`/single/${post._id}`}>
                    <Title>{post.title}</Title>
                  </Link>
                </Card>
              </Column>
            );
          })}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
