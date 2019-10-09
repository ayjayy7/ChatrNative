import { createStackNavigator } from "react-navigation-stack";

import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import CreateForm from "./components/CreateForm";
import SuperSecretPage from "./components/SuperSecretPage";
import Channel from "./components/Channel";

const StackNav = createStackNavigator(
  {
    SignupScreen: RegistrationForm,
    WelcomeScreen: Welcome,
    LoginScreen: LoginForm,
    CreatetScreen: CreateForm,
    SecretScree: SuperSecretPage,
    ChannelScreen: Channel
  },
  {
    initialRouteName: "WelcomeScreen",
    defaultNavigationOptions: {
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: "pink",
        fontWeight: "bold"
      }
    }
  }
);

export default StackNav;
