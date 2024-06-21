import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-7 my-10" id="Connect">
      <h2 className="font-bold text-3xl text-center underline decoration-dashed underline-offset-8">
        {" "}
        Get In Touch{" "}
      </h2>
      <div className="flex flex-col gap-3 text-center justify-center ">
        <p>Have any suggestions or looking for collab ? </p>
        <p>feel free to get in touch.</p>
      </div>
      <div className="flex gap-10 justify-center text-4xl">
        <a
          href="https://www.linkedin.com/in/upendharnemmani"
          target="_blank"
          className="hover:scale-110 hover:transition-all"
        >
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Upendhar10"
          target="_blank"
          className="hover:scale-110 hover:transition-all"
        >
          {" "}
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          href="https://twitter.com/UpendharNemmani"
          target="_blank"
          className="hover:scale-110 hover:transition-all"
        >
          {" "}
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </a>
      </div>
      <hr className=" bg-slate-400 border w-full" />
      <div>
        <p className="copyright">
          &#169; Upendhar Nemmani. All rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
