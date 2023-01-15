import React from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class ChatScreen extends React.Component {
	state = {
		messages: [],
	};

	render() {
		const chat = <GiftedChat messages={this.state.messages} user={this.user} />;

		if (Platform.OS === "android") {
			return (
				<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={3} enabled>
					{chat}
				</KeyboardAvoidingView>
			);
		}

		return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
	}
}
