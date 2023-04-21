/*
Rei Imai
Assignment4: Bank of React

Need to edit this file
This is Credits component
*/



import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';



class Credits extends Component {

    
    render () {
        return (
            <div>
                <h1>Credits</h1>
                <br/>
                {this.props.credits.map( (credit) => {
                    return (
                        <div key={credit.id}>
                            <h3>Description: {credit.description}</h3>
                            <h3>Amount: ${Math.round((credit.amount + Number.EPSILON) * 100) / 100}</h3>
                            <h3>Date: {credit.date.substring(0,10)}</h3>
                            <p>---------------------------------</p>
                        </div>
                    );
                })}
                <br/>
                <form onSubmit={this.props.addCredit}>
                <input type="text" name="description" placeholder="description(text)"/>
                <input type="number" name="amount" placeholder="amount(number)"/>
                <button type="submit">Add Credit</button>
                </form>
                <br/>
                <Link to="/">Return to Home</Link>
                <br/><br/>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}


export default Credits;