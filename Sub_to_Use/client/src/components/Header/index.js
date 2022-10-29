import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const togleMenu = () => {
        setMenuState(!menuState)
    }
    return (
        <header>
            <h3>
                Sub to Use
            </h3>
            <div className="container" onClick={togleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`${menuState ? "showMenu" : "menu"}`}>
                <li>
                    <Link to='/Ingredients'>
                        Add Ingredients
                    </Link>
                </li>
                <li>
                    <Link to='/RecipeList'>
                        View Recipes
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header