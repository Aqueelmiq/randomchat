/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./src/Login";
import Home from "./src/Home";
import ChatScreen from "./src/ChatScreen";
import AddFriend from "./src/AddFriend";


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "login"
        }
    }

    renderPage = () => {
        const {currentPage} = this.state;
        switch (this.state.currentPage) {
            case "login":
                return <Login changePageHandler={this.changePage}/>;
            case  "home":
                return <Home changePageHandler = { this.changePage}/>;
            case "ChatScreen":
                return <ChatScreen changePageHandler = { this.changePage}/>;
            case "addfriend":
                return <AddFriend changePageHandler = { this.changePage}/>;
            default:
                return <Login changePageHandler={this.changePage}/>;

        }
    };

    changePage = (pageName) => {
        this.setState({currentPage: pageName})
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderPage()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

});

