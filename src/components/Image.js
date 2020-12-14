import React, {Component} from 'react';

class Image extends Component{
    constructor(props){
        super(props);
        this.fname = "../assets/" + props.fname;
        this.size = props.size + "px";
    }

    render(){
        return(
            <img src={this.fname} width={this.size}/>
        );
    }
}
export default Image