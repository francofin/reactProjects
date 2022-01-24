import React, {Component} from "react";
import {connect} from 'react-redux';
import updateMeat from '../actions/meatInvUpdate';
import {bindActionCreators} from 'redux';


class MeatDept extends Component{

    // constructor(){
    //     super();
    // }

    increment = (qChange , index) => {
        console.log(updateMeat(qChange, index));
        this.props.updateMeat(qChange, index);

    }

    render(){
        // console.log(this.props.meatData)
        const meatInventory = this.props.meatData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input onClick={()=> {this.increment(1, i)}} type="button" value="+"/>
                    <input onClick={()=> {this.increment(-1, i)}} type="button" value="-"/>
                </div>
                )
            })
        return(
            <div>
                <h1>Meat Food Store</h1>
                <ul>
                    {meatInventory}
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
        updateMeat: updateMeat
    }, dispatch)
}
console.log(connect);
// export default FrozenDept
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);