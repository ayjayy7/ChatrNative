import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  View
} from "native-base";
const Welcome = ({ user }) => {
  if (user) return <Redirect to="/private" />;
  return (
    <Header className=" bg masthead d-flex">
      <View className="container text-center my-auto z-1" id="beeesh">
        <Text
          className="mb-1 text-white"
          style={{ fontFamily: "Acme", fontSize: 100 }}
        >
          WELCOME TO CHATR
        </Text>
        <Text className="mb-5 text-white" style={{ fontFamily: "Acme" }}>
          <Text>You're gonna need to login to see the messages</Text>
        </Text>
        <Link to="/login" className="btn btn-outline-danger btn-lg">
          Login
        </Link>
      </View>
      <View className="overlay z-0" />
    </Header>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Welcome);
