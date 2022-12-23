import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

const IngredientEntry = ({ ingredientFormData, setIngredientFormData, checkedSupplies }) => {
    let navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIngredientFormData({ ...ingredientFormData, [name]: value });
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/supplies')
    }
    return (
        <>
            <Header />
            <div>
                <div>
                    <h1>Enter Ingredients</h1>
                </div>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label>One
                            <input
                                name="ingredientOne"
                                type="text"
                                value={ingredientFormData.ingredientOne}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Two
                            <input
                                name="ingredientTwo"
                                type="text"
                                value={ingredientFormData.ingredientTwo}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Three
                            <input
                                name="ingredientThree"
                                type="text"
                                value={ingredientFormData.ingredientThree}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type='submit'>&#10145;</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default IngredientEntry;