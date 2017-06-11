import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import app from './reducers';
import HomeContainer from './page/home/HomeContainer';

class ReactApp extends Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let store = createStore(app);
        return (
            <Provider store={store}>
                <HomeContainer/>
            </Provider>
        )
    }
}

export default ReactApp;