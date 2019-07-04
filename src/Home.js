/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Button} from 'react-native';
import ChatScreen from "./ChatScreen";


type Props = { changePageHandler: string => any };

export default class Home extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            friends: [
                {
                    name: "Hajera",
                    lastText: "Hello are you there?"
                },
                {
                    name: "Aquib",
                    lastText: "Hello"
                },
            ],
        }
    }

    onPressItem = (name) => {
        const {changePageHandler} = this.props;
        // open chat page here
        changePageHandler("ChatScreen");
        //alert(name)

    };

    renderItem = ({item}) => {

        const {changePageHandler} = this.props;
        return (
            <TouchableOpacity onPress={() => this.onPressItem(item.name)}>
                <View style={{flex: 1}}>
                    <Text style={styles.friendName}>{item.name}</Text>
                    <Text>{item.lastText}</Text>
                    <View style={styles.alignLeftView}>
                        <Button title={title = "View"} onPress={() => changePageHandler("ChatScreen")}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    keyExtractor = (data, index) => data.name;

    render() {

        const {friends} = this.state;
        const {changePageHandler} = this.props;
        return (
            <View style={styles.container}>
                <Text style={{position: "absolute", top: 10}}> Chats! </Text>
                <View style={{position: "absolute", top: 60}}>
                    <FlatList renderItem={this.renderItem}
                              data={friends}
                              initialNumToRender={10}
                              keyExtractor={this.keyExtractor}
                              numColumns={1}
                    />
                </View>
                <View style={{position: "absolute", left: 60, top: 40}}>
                    <Button title={title = "Add Friend"} onPress={() => changePageHandler("addfriend")}/>
                </View>
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
    friendName: {
        fontSize: 20
    },
    friendText: {
        fontSize: 16
    },
    chatHeading: {
        fontSize: 24,
        paddingTop: 10
    },
    alignLeftView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 300
    },



});
