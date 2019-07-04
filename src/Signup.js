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

export default class Signup extends Component<Props> {
    render() {
        const {changePageHandler} = this.props;
        return (
            <View>

                <Text style={styles.heading}>Welcome! </Text>
                <View style={styles.spacingHigh}/>
                <Text style={styles.fieldText}>Username: </Text>
                <TextInput placeholder="Enter username:"/>
                <View style={styles.spacingSmall}/>
                <Text style={styles.fieldText}>Password: </Text>
                <TextInput placeholder="Enter password:"/>
                <View style={styles.spacingSmall}/>
                <Text style={styles.fieldText}>Confirm Password: </Text>
                <TextInput placeholder="Confirm password:"/>
                <View style={styles.spacingSmall}/>
                <View style={styles.alignLeftView}>
                    <Button title={title = "Sign Up"} onPress={() => changePageHandler("home")}/>
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




