import React, {Component} from "react";
import {connect} from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import {bindActionCreators} from 'redux';
class FrozenDept extends Component{

    constructor(){
        super();
    }

    increment = (operation , index) => {
        console.log(updateFrozen(operation, index));
        this.props.updateFrozen(operation, index);
    }

    render(){
        console.log(this.props.meatData)
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input onClick={()=> {this.increment("+", i)}} type="button" value="+"/>
                    <input onClick={()=> {this.increment("-", i)}} type="button" value="-"/>
                </div>
                )
            })
        return(
            <div>
                <h1>Frozen Food Store</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        frozenData:state.frozen,
        meatData: state.meat,
        produceData: state.produce,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}
console.log(connect);
// export default FrozenDept
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);