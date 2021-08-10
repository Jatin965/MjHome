import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const LoginRegister = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <Tab.Container defaultActiveKey="login">
                  <Nav variant="pills" className="login-register-tab-list">
                    <Nav.Item>
                      <Nav.Link eventKey="login">
                        <h4>Login</h4>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="register">
                        <h4>Register</h4>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <input
                              type="email"
                              name="user-email"
                              placeholder="Email"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password"
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn">
                                <Link to={process.env.PUBLIC_URL + "/"}>
                                  Forgot Password?
                                </Link>
                              </div>
                              <button type="submit">
                                <span>Login</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="register">
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form>
                            <input
                              type="text"
                              name="first-name"
                              placeholder="First Name"
                            />
                            <input
                              type="text"
                              name="last-name"
                              placeholder="Last Name"
                            />
                            <input
                              name="user-phone"
                              placeholder="Phone"
                              type="email"
                            />
                            <input
                              name="user-email"
                              placeholder="Email"
                              type="tel"
                              pattern="[0-9]{10}"
                            />
                            <input
                              type="password"
                              name="user-password"
                              placeholder="Password"
                            />
                            <input
                              type="password"
                              name="confirm-password"
                              placeholder="Confirm Password"
                            />
                            <div className="button-box">
                              <button type="submit">
                                <span>Register</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRegister;
