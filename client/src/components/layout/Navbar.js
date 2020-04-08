import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = (isAuthenticated) => {
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

  const authLinksTalent = (
    <ul>
      <li>
        <Link to="/#!">我的履歷</Link>
      </li>
      <li>
        <Link to="/#!">找工作</Link>
      </li>
      <li>
        <Link to="/#!">個人資料</Link>
      </li>
      <li>
        <Link to="/#!">登出</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/#!">找工作</Link>
      </li>
      <li>
        <Link to="/register">註冊</Link>
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
      <Fragment>{isAuthenticated ? authLinksTalent : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Navbar);
