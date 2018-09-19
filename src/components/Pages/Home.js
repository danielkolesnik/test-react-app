import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';

class Home extends Component {


    render() {
        return (
            <div id={'home'}>
                <h2 className='someNestedSelector'>
                    Welcome back, {this.props.name}
                    <Input type="text" ref={ this.props.name } />
                    <Button onClick={ this.props.onChangeName } color="success">Change Name</Button>
                    <Button onClick={ this.props.onResetName } color="danger">Reset Name</Button>
                </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: () => dispatch({type: 'CHANGE_NAME', payload: 'Borya'}),
        onResetName: () => dispatch({type: 'RESET_NAME', payload: ''})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);