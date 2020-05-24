import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
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
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i> <span>登出</span>
        </a>
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
        <Link to="/login">登入</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1 className="navbar__brand">
        <Link to="/">CanaanProject</Link>
      </h1>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinksTalent : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
