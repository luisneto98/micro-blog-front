import React, { Component } from 'react';

const styleFooter = {

}

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer class="footer mt-auto py-3 fixed-bottom bg-secondary">
                <div class="container">
                    <span class="text-white">Microblog</span>
                </div>
            </footer>
         );
    }
}
 
export default Footer;