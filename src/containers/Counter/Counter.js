import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { increamentCounterAction, decreamentCounterAction,addCounterAction, removeCounterAction , reset } from '../../store/actions'
class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={ this.props.onIncreament } />
                <CounterControl label="Decrement" clicked={ this.props.onDecreament }  />
                <CounterControl label="Add 5" clicked={() => this.props.addCounterAction(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.removeCounterAction( 5 )}  />
                <CounterControl label="Reset" clicked={this.props.reset}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncreament : ()=> dispatch(increamentCounterAction()),
        onDecreament : ()=> dispatch(decreamentCounterAction()),
        addCounterAction: (value)=> dispatch(addCounterAction(value)),
        removeCounterAction :(value)=> dispatch(removeCounterAction(value)),
        reset :()=> dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);