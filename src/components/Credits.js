/*
Rei Imai
Assignment4: Bank of React

Need to edit this file
This is Credits component
*/



import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Credits extends Component {
    
    
    
    render () {
        return (
            <div>
                <h1>Credits</h1>
                <br/>
                <Link to="/">Return to Home</Link>
            </div>
        );
    }
}


export default Credits;