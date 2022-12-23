import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
    
    return (
        <>
            <div>
                <h1>Recipes</h1>
                <Link to='/ingredients'>Edit Ingredients</Link>
                <Link to='/supplies'>Edit Supplies</Link>
            </div>
        </>
    )
}

export default RecipeList;