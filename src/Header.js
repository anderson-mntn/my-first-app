import React from "react";
import Menu from "./Menu";
import './App.css'



class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <header className='header1'>
                <h1>{this.propsprops.name}</h1>
                <Menu links={this.props.links}></Menu>
            </header>
        )
    }

}


export default Header;