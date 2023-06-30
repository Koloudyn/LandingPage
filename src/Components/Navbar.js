import React, { useState } from "react";
import "./Navbar.css";

function Button(props) {
    const pos = (props.index == 0) ? true : false;
    console.log(document.documentElement.scrollHeight);
    const goTo = () => {
         window.scrollTo({
             top: (pos ? document.documentElement.scrollHeight : 0),
             behavior: "smooth"
         })
    }
    return (
        <img src={props.item} onClick={goTo} />
    );
}
const Navbar = ({ navbarLinks }) => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="icon.png" />
            </div>
            <ul className="navbar_list">
                {navbarLinks.map((item, index) => {
                    return (
                        <li className="navbar_item navbar_logo" key={index}>
                            <Button item={item} index={index}/>
                            {console.log(item)}
                        </li>
                        );
                    }
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
