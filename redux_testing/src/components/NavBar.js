import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/main">Entire Store</Link></li>
                    <li><Link to="/produce">Produce Department</Link></li>
                    <li><Link to="/meat">Meat Department</Link></li>
                    <li><Link to="/frozen">Frozen Department</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;