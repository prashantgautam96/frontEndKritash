import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import ContactUsForm from "components/forms/SimpleContactUs.js";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;
export default ({ headingText = "Privacy Policy" }) => {
  return (
    <AnimationRevealPage>
      {/* <Header /> */}
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          
          <Text>
            <p>Last updated: April 21, 2020</p>

            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
              information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy Policy.
            </p>

            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
            </p>
            <p>
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </p>

            

            <h2>Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li>
                <p>
                  <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                  legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                </p>
              </li>
              <li>
                <p>
                  <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)
                  refers to Treact.
                </p>
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control
                with a party, where "control" means ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other managing authority.
              </li>
              <li>
                <strong>Account</strong> means a unique account created for You to access our Service or parts of our
                Service.
              </li>
              <li>
                <strong>Website</strong> refers to Treact, accessible from https://treact.com
              </li>{" "}
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Country</strong> refers to: Maharashtra, India
              </li>
              <li>
                <p>
                  <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf
                  of the Company. It refers to third-party companies or individuals employed by the Company to
                  facilitate the Service, to provide the Service on behalf of the Company, to perform services related
                  to the Service or to assist the Company in analyzing how the Service is used.
                </p>
              </li>
              <li>
                <strong>Third-party Social Media Service</strong> refers to any website or any social network website
                through which a User can log in or create an account to use the Service.
              </li>
              <li>
                <p>
                  <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                  individual.
                </p>
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other
                device by a website, containing the details of Your browsing history on that website among its many
                uses.
              </li>{" "}
              <li>
                <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example, the duration of a page visit).
              </li>
            </ul>

            <h1>Collecting and Using Your Personal Data</h1>
            <h2>Types of Data Collected</h2>

            <h3>Personal Data</h3>
            <p>
              While using Our Service, We may ask You to provide Us with certain personally identifiable information
              that can be used to contact or identify You. Personally identifiable information may include, but is not
              limited to:
            </p>
            <ul>
              <li>Email address</li> <li>First name and last name</li> <li>Phone number</li>{" "}
              <li>Address, State, Province, ZIP/Postal code, City</li> <li>Usage Data</li>
            </ul>

            <h3>Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that You visit, the time and date of Your visit,
              the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may collect certain information
              automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique
              ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet
              browser You use, unique device identifiers and other diagnostic data.
            </p>
            <p>
              We may also collect information that Your browser sends whenever You visit our Service or when You access
              the Service by or through a mobile device.
            </p>

            <h3>Tracking Technologies and Cookies</h3>
            <p>
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain
              information. Tracking technologies used are beacons, tags, and scripts to collect and track information
              and to improve and analyze Our Service.
            </p>
            <p>
              You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However,
              if You do not accept Cookies, You may not be able to use some parts of our Service.
            </p>
            <p>
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or
              mobile device when You go offline, while Session Cookies are deleted as soon as You close your web
              browser. Learn more about cookies: <a href="https://www.termsfeed.com/blog/cookies/">All About Cookies</a>
              .
            </p>
            <p>We use both session and persistent Cookies for the purposes set out below:</p>
            <ul>
              <li>
                <p>
                  <strong>Necessary / Essential Cookies</strong>
                </p>
                <p>Type: Session Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies are essential to provide You with services available through the Website and to
                  enable You to use some of its features. They help to authenticate users and prevent fraudulent use of
                  user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We
                  only use these Cookies to provide You with those services.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookies Policy / Notice Acceptance Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
              </li>
              <li>
                <p>
                  <strong>Functionality Cookies</strong>
                </p>
                <p>Type: Persistent Cookies</p>
                <p>Administered by: Us</p>
                <p>
                  Purpose: These Cookies allow us to remember choices You make when You use the Website, such as
                  remembering your login details or language preference. The purpose of these Cookies is to provide You
                  with a more personal experience and to avoid You having to re-enter your preferences every time You
                  use the Website.
                </p>
              </li>
            </ul>
            <p>
              For more information about the cookies we use and your choices regarding cookies, please visit our Cookies
              Policy.
            </p>

            

          
          </Text>
          <ContactUsForm/>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
