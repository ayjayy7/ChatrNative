import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";
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

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = keyValue => this.setState(keyValue);

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return this.props.navigation.replace("SecretScreen");
    const { username, password } = this.state;

    return (
      <View className=" my-6" id="beeesh">
        <View className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
          <View className=" col-6 mx-auto my-5">
            <View className="card my-5">
              <View className="card-body">
                <Form onSubmit={this.handleSubmit}>
                  <View className="form-group">
                    <Text htmlFor="username">Username</Text>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      name="username"
                      placeholder="Username"
                      onchangeText={this.handleChange}
                    />
                  </View>
                  <View className="form-group">
                    <Text htmlFor="password">Password</Text>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      name="password"
                      placeholder="Password"
                      onchangeText={this.handleChange}
                    />
                    <Text style={{ color: "red" }}>
                      {this.props.errors
                        ? this.props.errors.non_field_errors
                        : ""}
                    </Text>
                  </View>

                  <Button type="submit" className="btn btn-danger">
                    Login
                  </Button>

                  <Link
                    to="/signup"
                    className="btn btn-link text-danger my-2 my-sm-0"
                  >
                    Signup for an account
                  </Link>
                </Form>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
