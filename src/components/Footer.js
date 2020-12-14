import React, { Component } from 'react';

class Footer extends Component {
     render(){
         return(<footer>
            <div>{this.props.footer}</div>
         </footer>);
     }
}

export default Footer;