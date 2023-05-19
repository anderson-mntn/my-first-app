import React from "react";
import Menu from "./Menu";
import './App.css'



class Header extends React.Component{

    constructor(props){
        super();
    }

    render(){
        return (
            <header className='header1'>
                <h1>{this.props.name}</h1>
                <Menu links={this.props.links}></Menu>
            </header>
        )
    }

}


export default Header;