import React from "react";
import user from "../data/user";
// import { Links, github, linkedin } from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {/* add your <Links /> component here */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={user.links.github}>github</a>
      <a href={user.links.linkedin}>linkedin</a>
    </div>
  );
}

export default About;
