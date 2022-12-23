import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipes }) => {
    if (!recipes.length) {
        return (
            <>
                <h3>Sorry, No Recipes Fit that criteria!</h3>
            </>
        )
    }
    return (
        <>
            {recipes && 
                recipes.map((recipe) => {
                    <div key={recipe.id}>
                        {/* recipe Image */}
                        {/* recipe title */}
                        {/* recipe rating */}
                    </div>
                })}
        </>
    )
};

export default RecipeCard;