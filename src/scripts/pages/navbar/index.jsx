import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/champions">Champions</Link>
            </nav>
        );
    }
}

export default NavBar;