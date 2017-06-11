import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Home extends Component {
    
    constructor(props) {
        super(props)
    }
    
    handlePress = () => {
        console.log('clicked');
        alert('clicked');
        
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigblue}>test</Text>
                <Button onPress={this.handlePress} title={'click me'}>Click Me</Button>
            </View>
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

export default Home;