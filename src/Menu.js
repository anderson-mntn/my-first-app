import React from "react"

function Menu(props){

    const listLinks = props.links.map((link, index) =><li key={index}>{link}</li>);

    return(
        <ul className="list1">
              {listLinks}
        </ul>
    )
}

export default Menu;