import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <div>
      <h2 className="text-3xl font-bold">
        <Typewriter
          words={["John Michael De Jesus"]}
          loop={1}
          typeSpeed={70}
          deleteSpeed={50}
          cursor
          cursorStyle="|"
        />
      </h2>

      <h3 className="text-xl font-semibold">
        <Typewriter
          words={["Aspiring Web Developer"]}
          loop={1}
          typeSpeed={70}
          deleteSpeed={50}
          cursor
          cursorStyle="|"
        />
      </h3>
    </div>
  );
}

export default Type;
