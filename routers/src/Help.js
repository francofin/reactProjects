import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';

const HelpCustomer = () => <h1>help Customer</h1>
const HelpHost = () => <h1>help Host</h1>

function Help(props){
    return(
        <div>
            <div>
                <Link to="/help/customer"> I am A Customer </Link> |
                <Link to="/help/host"> I am A Host </Link>
            </div>
            <p>An Image Goes Here</p>
                <Route path="/help/customer" component={HelpCustomer} />
                <Route path="/help/host" component={HelpHost} />
            <h3>Footer</h3>
        </div>
        
    )
}
export default Help