import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import HomeContainer from './page/home/HomeContainer';

class ReactApp extends Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <HomeContainer/>
            </Provider>
        )
    }
}

export default ReactApp;