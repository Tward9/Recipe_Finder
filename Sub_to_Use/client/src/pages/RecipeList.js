import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const RecipeList = () => {
    const recipes = [];
    return (
        <>
            <div>
                <h1>Recipes</h1>
                <Link to='/ingredients'>Edit Ingredients</Link>
                <Link to='/supplies'>Edit Supplies</Link>
            </div>
            <RecipeCard recipes={recipes}/>
            <div>
                <Link to='/home'>Home</Link>
            </div>
        </>
    )
}

export default RecipeList;