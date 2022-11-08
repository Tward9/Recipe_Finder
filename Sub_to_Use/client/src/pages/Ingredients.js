import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";

const IngredientEntry = () => {
    let navigate = useNavigate();

    const ingredientOne = '';
    const ingredientTwo = '';
    const ingredientThree = '';

    const [ingredientFormData, setIngredientFormData] = useState({
        ingredientOne: '',
        ingredientTwo: '',
        ingredientThree: '',
    });
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
                                type="text"
                                value={ingredientOne}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Two
                            <input
                                type="text"
                                value={ingredientTwo}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Three
                            <input
                                type="text"
                                value={ingredientThree}
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