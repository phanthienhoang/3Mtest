import React, { Component } from "react";
import {  withRouter } from 'react-router-dom';

class index extends Component {
    logOut(e) {  
        e.preventDefault();
        localStorage.clear();
        // localStorage.removeItem('appState');
        this.props.history.push(`/login`);
    }
    render() {       
        return (
            <p onClick={this.logOut.bind(this)} className="nav-link">Logout</p>
        )
    }
}
export default withRouter(index) 