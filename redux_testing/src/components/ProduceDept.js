import React, {Component} from "react";
import {connect} from 'react-redux';
import updateProduce from '../actions/produceInvUpdate';
import {bindActionCreators} from 'redux';
class ProduceDept extends Component{

    // constructor(){
    //     super();
    // }

    increment = (operation , index) => {
        console.log(updateProduce(operation, index));
        this.props.updateProduce(operation, index);

    }

    render(){
        // console.log(this.props.meatData)
        const produceInventory = this.props.produceData.map((item, i) => {
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
                <h1>Produce Food Store</h1>
                <ul>
                    {produceInventory}
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
        updateProduce: updateProduce
    }, dispatch)
}
console.log(connect);
// export default FrozenDept
export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);