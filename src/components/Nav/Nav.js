import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {
    render() {
        console.log(this.props)
        return (

            <div>
                <Link to='/dashboard'>Home</Link>
                <Link to='/new'>New Post</Link>
                <Link to='/'>Logout</Link>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    const { username, profile_pic } = reduxState
    return {
        username,
        profile_pic,
    }
}

export default connect(mapStateToProps)(Nav);