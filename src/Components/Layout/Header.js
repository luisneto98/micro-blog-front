import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-light bg-dark">
                    <div class="navbar-brand text-primary font-weight-bold">NWEET</div>
                </nav>
            </div>
        );
    }
}
 
export default Header;