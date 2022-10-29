import "./write.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useCookies } from "react-cookie";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "components/headers/light.js";
import tw from "twin.macro";
import styled from "styled-components";

export default function Write() {
  const editor = useRef(null);
  const [cookies, setCookie] = useCookies(["token"]);

  const [place, setPlace] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [photo, setPhoto] = useState("");
  const [featured, setFeatured] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("place", place);
    formData.append("subject", subject);
    formData.append("desc", desc);
    formData.append("link", link);
    formData.append("photo", photo);
    formData.append("featured", featured);
    console.log(cookies.token);
    const res = await axios.post("/akshar", formData, {
      headers: { Authorization: `Bearer ${cookies.token}` },
    });

    console.log(res);
  };
  const StyledHeader = styled(Header)`
    ${tw`pt-8 max-w-none`}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
      ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
    }
    ${NavToggle}.closed {
      ${tw`text-gray-100 hover:text-primary-500`}
    }
  `;

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blogging">Blogs</NavLink>
      <NavLink href="/accha">Aksharshala</NavLink>
      <NavLink href="/team1">About</NavLink>
      <NavLink href="/team">Team</NavLink>
      <NavLink href="/events_page">Events</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/bloodyForm">Join Us</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <div className="write">
      <div className="nav-bar">{navLinks}</div>
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            id="fileInput"
            type="text"
            className="writeInput"
            placeholder="subject"
            onChange={(e) => setSubject(e.target.value)}
          />

          <input
            type="file"
            className="writeInput"
            name="myImage"
            accept="image/*"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
          <input
            className="writeInput"
            placeholder="place"
            type="text"
            autoFocus={true}
            onChange={(e) => setPlace(e.target.value)}
          />
          <JoditEditor
            ref={editor}
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e)}
          />
          <button
            type="submit"
            id="submit"
            name="submit"
            className="writeInput"
            // className="btn btn-primary  writeSubmit "
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}
