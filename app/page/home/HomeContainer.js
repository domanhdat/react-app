import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = (state, ownProps) => {
    return {...state, ...ownProps};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch()
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;