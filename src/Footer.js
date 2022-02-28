import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <em className="quote">I am exactly where I need to be</em>

      <span className="acknowledgement">
        <a
          href="https://github.com/claude-rose/Weather-App"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Claudia Cross for SheCodes
      </span>
    </footer>
  );
}
