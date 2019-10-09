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
class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = keyValue => {
    this.setState(keyValue);
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    if (this.props.user) return <Redirect to="/private" />;
    console.log(this.props.errors);
    const type = this.props.match.url.substring(1);
    return (
      <View className="bg my-6" id="beeesh">
        <View className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter">
          <View className="card col-6 mx-auto p-0 mt-5">
            <View className="card-body">
              <Text className="card-title mb-4">
                {type === "login"
                  ? "Login to send messages"
                  : "Register an account"}
              </Text>
              <Form onSubmit={this.submitHandler}>
                <View className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.changeHandler}
                  />
                </View>
                <View className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.changeHandler}
                  />
                </View>
                <input
                  className="btn btn-danger"
                  type="submit"
                  value={type.replace(/^\w/, c => c.toUpperCase())}
                />
              </Form>
            </View>
            <View className="card-footer">
              <Link
                to={type === "login" ? "/signup" : "/login"}
                className="btn btn-small btn-link text-danger"
              >
                {type === "login"
                  ? "register an account"
                  : "login with an existing account"}
              </Link>
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
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
