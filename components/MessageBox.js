import React from "react";
import { connect } from "react-redux";
import { fetchChannel, sendMessage } from "../redux/actions";
class MessageBox extends React.Component {
  state = {
    message: ""
  };
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    ////////////////////////////////////
  };
  addEmoji = e => {
    // let emoji = e.native;
    // this.setState({
    //   text: this.state.text + emoji
    // })
    this.setState({ message: this.state.message + ` ${e.native}` });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.sendMessage(
      this.props.match.params.channelID,
      this.state,
      this.props.user
    );
    let text = document.messageForm.message;
    console.log("that", text);
    text.value = "";
  };
  render() {
    return (
      <form name="messageForm" onSubmit={this.submitHandler}>
        <View className="row" id="scroller">
          <View className="col-12">
            <textarea
              name="message"
              placeholder="Type your message"
              onChange={this.changeHandler}
            ></textarea>
          </View>
          <View className="col-2" style={{ padding: 0 }}>
            <input className="btn btn-warning" type="submit" value="Send" />
          </View>
        </View>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  currentChannel: state.channels.currentChannel,
  channels: state.channels.channels
});
const mapDispatchToProps = dispatch => {
  console.log("Called");
  return {
    fetchChannel: channelID => dispatch(fetchChannel(channelID)),
    sendMessage: (channelID, message, user) =>
      dispatch(sendMessage(channelID, message, user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBox);
