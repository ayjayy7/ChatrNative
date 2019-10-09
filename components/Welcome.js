import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// react-native
import { View, icon } from "native-base";

const Welcome = ({ user }) => {
  if (user) return <Redirect to="/private" />;
  return (
    <header className=" bg masthead d-flex">
      <View className="container text-center my-auto z-1" id="beeesh">
        <text
          className="mb-1 text-white"
          style={{ fontFamily: "Acme", fontSize: 100 }}
        >
          WELCOME TO CHATR
        </text>
        <text className="mb-5 text-white" style={{ fontFamily: "Acme" }}>
          <em>You're gonna need to login to see the messages</em>
        </text>
        <Link to="/login" className="btn btn-outline-danger btn-lg">
          Login
        </Link>
      </View>
      <View className="overlay z-0" />
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Welcome);
