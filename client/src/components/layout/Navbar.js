import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Revisit when setup auth capability
  // const authLinksCompany = (
  //   <ul>
  //     <li>
  //       <Link to="/#!">New Listing</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">Talent Pool</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">Company Profile</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">Logout</Link>
  //     </li>
  //   </ul>
  // );

  // const authLinksTalent = (
  //   <ul>
  //     <li>
  //       <Link to="/#!">My resume</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">Job Pool</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">My Profile</Link>
  //     </li>
  //     <li>
  //       <Link to="/#!">Logout</Link>
  //     </li>
  //   </ul>
  // );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/#!">找工作</Link>
      </li>
      <li>
        <Link to="/#!">註冊</Link>
      </li>
      <li>
        <Link to="/#!">登入</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1 className="navbar__brand">
        <Link to="/">CanaanProject</Link>
      </h1>
      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;
