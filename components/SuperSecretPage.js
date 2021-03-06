import React from "react";
import { Redirect } from "react-router-dom";
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

// react-native
import { View } from "native-base";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;

  return (
    <View className="bg2 text-center my-auto z-1">
      <Text
        className="my-5 text-white"
        style={{ fontFamily: "Acme", fontSize: 100 }}
      >
        Welcome {user.username}!
      </Text>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(SuperSecretPage);
