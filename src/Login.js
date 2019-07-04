/**
 * Page  Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';


type Props = {
    changePageHandler: string => any
};
export default class Login extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    signupUser = () => {
        const {username, password} = this.state;
        const {changePageHandler} = this.props;
        fetch(`http://localhost:8080/User/signup?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    alert(data.error)
                } else {
                    changePageHandler("home");
                }
            })
    };

    loginUser = () => {
        const {username, password} = this.state;
        const {changePageHandler} = this.props;
        fetch(`http://localhost:8080/User/signup?username=${username}&password=${password}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error && data.error === "Account does not exist.") {
                    this.signupUser();
                } else if (data.error) {
                    alert(data.error)
                } else {
                    changePageHandler("home");
                }
            })
    };

    setUsername = (username) => {
        this.setState({username})
    };

    setPassword = (password) => {
        this.setState({password})
    };

    render() {
        const {username, password} = this.state;
        return (
            <View>
                <Text style={styles.heading}>Welcome! </Text>
                <View style={styles.spacingHigh}/>
                <Text style={styles.fieldText}>Username: </Text>
                <TextInput placeholder="Enter username:" value={username} onChangeText={this.setUsername}/>
                <View style={styles.spacingSmall}/>
                <Text style={styles.fieldText}>Password: </Text>
                <TextInput placeholder="Enter password:" value={password} onChangeText={this.setPassword}/>
                <View style={styles.spacingSmall}/>
                <View style={styles.alignLeftView}>
                    <Button title={"Login"} onPress={this.loginUser}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: "500"
    },
    spacingHigh: {
        padding: 10
    },
    spacingSmall: {
        padding: 5
    },
    fieldText: {
        fontSize: 16
    },
    alignLeftView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    btnStyle: {
        backgroundColor: "black",
        color: "white",
        borderRadius: 2
    }
});




