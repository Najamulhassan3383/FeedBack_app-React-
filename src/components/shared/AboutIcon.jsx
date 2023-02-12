import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

export default function AboutIcon() {
  return (
    <div className="about-link">
      <Link to= "/about">
        {" "}
        <FaQuestion size="1.5rem" />
      </Link>
    </div>
  );
}
