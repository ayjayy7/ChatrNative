import { StyleSheet, Text, Footer, View } from "react-native";
import React, { Component } from "react";

// Scripts
import main from "./assets/js/main";

// Components
import NavBar from "./components/Navigation/NavBar";

import AppContainer from "./components/Navigation/index";
import { connect } from "react-redux";
class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <View className="content-wrapper bg-transparent">
        <NavBar />
        <AppContainer />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
export default connect(mapStateToProps)(App);
