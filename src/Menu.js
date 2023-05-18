import React from "react"

function Menu(props){
    return(
        <ul className="list1">
              {props.links.map(link =>{
                return (<li>{link}</li>)
              })}  
        </ul>
    )
}

export default Menu;