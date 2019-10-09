import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { addChannel } from "../redux/actions";
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
class CreateForm extends React.Component {
  state = {
    name: "",
    image_url: ""
  };
  changeHandler = keyValue => {
    this.setState(keyValue);
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addChannel(this.state);
    let text = document.createForm.name;

    text.value = "";
  };
  render() {
    if (!this.props.user) return this.props.navigation.replace("LoginScreen");
    return (
      <View className="bg3 my-6">
        <View className="container-fluid jumbotron bg-transparent my-5 text-center align-ceneter"></View>
        <View className=" col-6 mx-auto my-5">
          <View className="card my-5">
            <View className="card-body">
              <Form name="createForm" onSubmit={this.submitHandler}>
                <View className="form-group">
                  <Text className="h4 text-center mb-4">Create a Channel</Text>
                  <Text htmlFor="channelname"> Channel Name</Text>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter channel name"
                    onchangeText={this.changeHandler}
                  />
                </View>
                <View className="form-group">
                  <Text htmlFor="backgroundimage">Background image</Text>
                  <input
                    type="text"
                    className="form-control"
                    name="image_url"
                    placeholder="Enter image url"
                    onchangeText={this.changeHandler}
                  />
                </View>
                <View className="text-center mt-4">
                  <Button type="submit" className="btn btn-danger">
                    Create
                  </Button>
                </View>
              </Form>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  channels: state.channels.channels,
  user: state.user.user,
  currentChannel: state.channels.currentChannel
});
const mapDispatchToProps = dispatch => {
  return {
    addChannel: name => dispatch(addChannel(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateForm);
