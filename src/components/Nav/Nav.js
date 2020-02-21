import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
            </div>
        );
    }
}

export default Nav;