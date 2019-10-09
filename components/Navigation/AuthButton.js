import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, logout }) => {
  let buttons = [
    <ListItem key="loginButton" className="nav-item">
      <Link to="/login" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </ListItem>,
    <ListItem key="signupButton" className="nav-item">
      <Link to="/signup" className="nav-link">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </ListItem>
  ];

  if (user) {
    buttons = (
      <>
        <span className="navbar-text ">{user.username}</span>
<<<<<<< HEAD
        <ListItem>
          className="nav-item">
          <Text className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} /> Logout
          </Text>
=======
        <ListItem className="nav-item">
          <span className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} onClick={logout} /> Logout
          </span>
>>>>>>> 24caa25ef952846ce968b09b6904e1d844711ed6
        </ListItem>
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
