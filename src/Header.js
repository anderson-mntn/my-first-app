import React from "react";
import './App.css'

function Header(props){
    return (
        <header className='header1'>
            <h1>{props.name}</h1>
            <ul className="list1">
                <li>{props.links[0]}</li>
                <li>{props.links[1]}</li>
                <li>{props.links[2]}</li>
            </ul>
        </header>
    )
}
export default Header;