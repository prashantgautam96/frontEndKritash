import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line;
import EventLandingPage from "demos/EventLandingPage.js";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
import BlogIndexPage from "pages/BlogIndex.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aksharsala from "pages/Aksharsala";
import Team from "pages/Team";
import AboutUs from "pages/AboutUs";
import BloodForm from "pages/PrivacyPolicy";
import BloodDatabase from "pages/PrivacyPolicy copy";
import Dashboard from "pages/Dashboard";
import Events from "pages/Events";
import PrivacyPolicy from "pages/PrivacyPolicy";
import AddPost from "components/admincomp/AddPost";
import Allblogs from "components/admincomp/Allblogs";
import Allevents from "components/admincomp/Allevents";
import Allteam from "components/admincomp/Allteam";
import Alltime from "components/admincomp/Alltime";
import Single from "pages/single/Single";
import Write from "components/admincomp/write/Write";
import Singleak from "pages/single/Singleak";
import Blooddata from "components/admincomp/Blooddata";
import ContactUsData from "components/admincomp/ContactUsData";
import Login from "pages/Login";
import Signup from "pages/Signup";

// import SinglePost from "components/singlePost/SinglePost";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/blogging">
          <BlogIndexPage />
        </Route>
        <Route path="/accha">
          <Aksharsala />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/team1">
          <AboutUs />
        </Route>
        <Route path="/bloodyform">
          <BloodForm />
        </Route>
        <Route path="/dash">
          <Dashboard />
        </Route>
        <Route path="/blooddatabase">
          <BloodDatabase />
        </Route>
        <Route path="/Addpost">
          <Write />
        </Route>

        <Route path="/Allblogs">
          <Allblogs />
        </Route>

        <Route path="/Allevents">
          <Allevents />
        </Route>
        <Route path="/Allteam">
          <Allteam />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
        <Route path="/singleak">
          <Singleak />
        </Route>
        <Route path="/Alltime">
          <Alltime />
        </Route>
        <Route path="/BloodData">
          <Blooddata />
        </Route>
        <Route path="/login_page">
          <Login />
        </Route>
        <Route path="/Signup_page">
          <Signup />
        </Route>
        <Route path="/contactData">
          <ContactUsData />
        </Route>

        <Route path="/">
          <EventLandingPage />
        </Route>

        {/* <Route path="/contactus">
          <ContactUs />
        </Route> */}
        {/* <Route path="/aksharsala">
          <Aksharsala />
        </Route> */}
      </Switch>
    </Router>
  );
}
