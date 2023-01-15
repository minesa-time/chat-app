import { AppRegistry } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";

const AppNavigator = createStackNavigator(
	{
		Login: LoginScreen,
		Chat: ChatScreen,
	},
	{
		headerMode: "none",
	}
);

AppRegistry.registerComponent('mns-chat-app', () => createAppContainer(AppNavigator));

export default createAppContainer(AppNavigator);
