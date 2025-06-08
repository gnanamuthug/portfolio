import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IVR Developer",
          "Dialogflow CX Developer",
          "CCAI Developer",
          "Full Stack Developer",
          "Web Developer",
          "React Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
