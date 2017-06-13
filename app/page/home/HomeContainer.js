import {connect} from 'react-redux';
import Home from './Home';
import {loadData} from './HomeAction';

const mapStateToProps = (state) => {
    return state.home;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (data) => dispatch(loadData(data))
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;