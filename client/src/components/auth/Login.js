import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

const Login = ({ login, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <h1 className="login">立即登入！</h1>
      <p className="login__secondary-title">～～享有會員才有的功能～～</p>
      <form className="login__form" onSubmit={(e) => onSubmit(e)}>
        <div className="login__form form-group">
          <input
            type="email"
            placeholder="電子信箱"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="密碼"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn login__btn" value="登入" />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, setAlert })(Login);
