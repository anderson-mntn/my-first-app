import React from "react";
import './App.css'

function Header(props){
    return (
        <header className='header1'>
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </header>
    )
}

function Menu(props){
    return(
        <ul className="list1">
                <li>{props.links[0]}</li>
                <li>{props.links[1]}</li>
                <li>{props.links[2]}</li>
            </ul>
    )
}

export default Header;