import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';

class Home extends Component {
    
    constructor(props) {
        super(props)
    }
    
    handlePress = () => {
        console.log('clicked');
        this.props.onClick(this.props.text + 'test test');
        console.log(this.props);
    };
    
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.bigblue}>{this.props.text}</Text>
                    <Button onPress={this.handlePress} title={'click me'}>Click Me</Button>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    bigblue  : {
        color     : 'blue',
        fontWeight: 'bold',
        fontSize  : 30,
    },
    red      : {
        color: 'red',
    },
});

Home.defaultProps = {
    text: 'huhu',
};

export default Home;