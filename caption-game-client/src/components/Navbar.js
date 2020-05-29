import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
    // (event) => this.props.changePageFunc
    render(){
        return(
            <div>
                <div>
                <NavLink
                    to="/newsfeed" >
                Newsfeed
                    </NavLink>
                </div>
                <div >
                <NavLink
                    to="/profile" >
                Profile
                    </NavLink>
                </div>
                <div>
                <NavLink
                    to="/post" >
                Post
                    </NavLink>
                </div>
                <div>
                <NavLink
                    to="/search" >
                Search
                    </NavLink>
                </div>
                <div>
                    <NavLink
                    to="/" onClick={this.props.showLogin}>
                        Sign Out
                    </NavLink>
                </div>
            </div>
          
            
        )
    }
}