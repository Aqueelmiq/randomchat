import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';


type Props = {
    changePageHandler: string => any
};


export default class AddFriend extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   /* renderItem = ({item}) => {
        return (
        );
    };*/

    //keyExtractor = (data, index) => data.by;

    render() {
        return (
            <View>
                <Text style={styles.heading}>Add friend! </Text>
                <View style={styles.spacingHigh}/>
                <Text style={styles.fieldText}>Enter friend's username: </Text>
                <TextInput placeholder="Enter friend's username:"/>
                <View>
                    <Button title={title = "Add"} onPress={() => changePageHandler("add")}/>
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
    }
});