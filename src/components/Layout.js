import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends Component {

    render(){
        return (<div>
            <Header />
            {this.props.children}
            <a href="https://px.a8.net/svt/ejp?a8mat=3BSZDJ+2HB1IQ+50+2HN8K1" rel="nofollow">
                <img class="ad2" alt="" src="https://www25.a8.net/svt/bgt?aid=201226519150&wid=001&eno=01&mid=s00000000018015057000&mc=1" /></a>
                <img  width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=3BSZDJ+2HB1IQ+50+2HN8K1" alt="" />
            <Footer />
        </div>);
    }
}

export default Layout;