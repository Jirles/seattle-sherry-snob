import { connect } from 'react-redux';
import { fetchSherries } from '../actions';
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import SherryShow from './SherryShow';
import SherryList from './SherryList';

class SherryPage extends React.Component {
    
    componentDidMount(){
        this.props.fetchSherriesFromAPI();
    }

    render(){
        const {match} = this.props;
        return (
            <div>
                <Switch>
                    <Route exact path={match.url} component={SherryList}/>
                    <Route path='/sherries/:sherryId' component={SherryShow}/>
                </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSherriesFromAPI: () => dispatch(fetchSherries())
    }
}

const mapStateToProps = (state) => {
    return {
        sherries: state.sherries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SherryPage);