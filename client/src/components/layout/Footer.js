import React from "react";
import logo from "./tcp_footer_logo.png";

const Footer = () => {
  const logoStyle = { height: "120px", width: "auto" };
  return (
    <div className="footer">
      <div className="footer__logo">
        <img style={logoStyle} src={logo} alt="footer logo" />
      </div>
      <div className="footer__social">
        <div className="footer__social--container">
          <a
            target="_blank"
            href="https://www.facebook.com/TheCanaanProject"
            className="item"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/groups/M.I.T.malaysianintaiwan"
            className="item"
            rel="noopener noreferrer"
          >
            <i className="fas fa-users" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/thecanaanproject"
            className="item"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/TheCanaanProject"
            className="item"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube-square" />
          </a>
        </div>
      </div>
      {/* <div className="footer__contact">Contact</div> */}
    </div>
  );
};

export default Footer;
