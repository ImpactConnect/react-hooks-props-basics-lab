import React from "react";
// import user from "../data/user";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.user.color }}>
        {props.user.name} is a Web Developer from {props.user.city}
      </h1>
    </div>
  );
}

export default Home;
