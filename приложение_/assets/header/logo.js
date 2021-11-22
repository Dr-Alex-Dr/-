import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="102"
      height="26"
      viewBox="0 0 102 26"
    >
      <defs>
        <pattern
          id="pattern"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 2293 590"
        >
          <image
            width="2293"
            height="590"
          ></image>
        </pattern>
      </defs>
      <path fill="url(#pattern)" d="M0 0H102V26H0z"></path>
    </svg>
  );
}

export default Logo;
