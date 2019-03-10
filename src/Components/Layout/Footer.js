import React, { Component } from 'react';

const styleFooter = {

}

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="footer mt-auto py-3 fixed-bottom bg-secondary">
                <div className="container">
                    <span className="text-white">Microblog</span>
                </div>
            </footer>
         );
    }
}
 
export default Footer;