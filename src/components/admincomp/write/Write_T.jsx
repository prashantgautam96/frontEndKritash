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

export default function Write_T() {
  const editor = useRef(null);
  const [cookies, setCookie] = useCookies(["token"]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [that_year, setThatyear] = useState("");
  const [current, setCurrent] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("name", name);
    formData.append("position", position);
    formData.append("that_year", that_year);
    formData.append("current", current);
    const res = await axios.post("/teams", formData, {
      headers: { Authorization: `Bearer ${cookies.token}` },
    });
    console.log(res);
  };
  //   const StyledHeader = styled(Header)`
  //   ${tw`pt-8 max-w-none`}
  //   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
  //     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  //   }
  //   ${NavToggle}.closed {
  //     ${tw`text-gray-100 hover:text-primary-500`}
  //   }
  // `;

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
      {/* <StyledHeader links={navLinks} /> */}
      <div className="nav-bar">{navLinks}</div>
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            name="myImage"
            accept="image/*"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
          <input
            className="writeInput"
            placeholder="Position"
            type="text"
            autoFocus={true}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <JoditEditor
            ref={editor}
            placeholder="Current"
            onChange={(e) => setCurrent(e)}
          />
          <textarea
            className="writeInput writeText"
            type="textarea"
            id="subject"
            placeholder="Year"
            onChange={(e) => setThatyear(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          id="submit"
          name="submit"
          className="btn btn-primary  writeSubmit "
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
