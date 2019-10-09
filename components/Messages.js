import React from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  ListItem,
  View
} from "native-base";

// react-native
import { View } from "native-base";

const Messages = props => {
  return (
    <ListItem>
      <View className=" ">
        <Text className="card-body text-danger">
          <Text className="text-white bold" id="besh2">
            {props.messageObject.username}
          </Text>
          <Text className=" m-5 text-left"></Text>
        </Text>
        <Text className="speech-bubble bg-danger text-left card-text text-white d-inline-block  my-2  border-radius: 25px;">
          {props.messageObject.message}
        </Text>
        <Text class="card-text"></Text>
      </View>
    </ListItem>
  );
};
export default Messages;
