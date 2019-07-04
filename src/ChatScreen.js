import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from 'react-native';

type Props = {
    changePageHandler: string => any
};

export default class ChatScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            chatTimeline: [
                {
                    by: "Me",
                    message: "Hello are you there?",
                    time: "12:32"
                },
                {
                    by: "Aquib",
                    message: "Hello",
                    time: "12:33"
                }
            ],
            message: ""
        }
    }

    renderItem = ({item}) => {
        const align = item.by === "Me" ? 'flex-end' : 'flex-start';
        return (
            <View style={{flex: 1}}>
                <View style={[{alignItems: align, flexShrink: 1}]}>
                    <Text>{item.by}</Text>
                    <Text>{item.message}</Text>
                    <Text>{item.time}</Text>
                </View>
                <View style={styles.spacingSmall}/>
            </View>
        );
    };

    keyExtractor = (data, index) => data.by;

    render() {
        const {chatTimeline} = this.state;
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text>Chat</Text>
                </View>
                    <View style={styles.spacingHigh}/>
                <View style={{ flex: 1,
                    padding: 26,
                    backgroundColor: "#fff",
                    justifyContent: "flex-start"}}>
                    <FlatList renderItem={this.renderItem}
                              data={chatTimeline}
                              initialNumToRender={10}
                              keyExtractor={this.keyExtractor}
                              numColumns={1}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.innerContainer}>
                        <TextInput
                            style={styles.textStyle}
                            placeholder={"Write message"}/>
                        <Button title="Send"/>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*justifyContent: 'flex-start',
        alignItems: "stretch",
        backgroundColor: 'F5FCFF',
        paddingTop: 80,
        flexWrap: 'wrap'*/
    },
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
    },
    spacingSmaller: {
        padding: 1
    },
    chatHeading: {
        alignItems: 'center'
    },
    alignRightView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    buttonContainer: {
        flex: 1,
        padding: 26,
        backgroundColor: "#fff",
        justifyContent: "flex-start",

    },
    innerContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textStyle: {
        width: "70%",
    },
    buttonStyle: {
        width: "30%",
    }
});