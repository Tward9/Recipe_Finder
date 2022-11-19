import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SuppliesList = ({ checkedSupplies, setCheckedSupplies }) => {
    let navigate = useNavigate();
    const handleInputChange = (position) => {
        const updatedCheckedSupplies = checkedSupplies.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedSupplies(updatedCheckedSupplies);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/recipeList')
    }
    return (
        <>
            <Header />
            <div>
                <div>
                    <h2>What Supplies do you want to use?</h2>
                </div>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label>Hand Mixer
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Hand Mixer'
                                name="tool"
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Baking Tray
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Baking Tray'
                                name="tool"
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Muffin Tin
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Muffin Tin'
                                name="tool"
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Food Processor
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Food Processor'
                                name="tool"
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Loaf Pan
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Loaf Pan'
                                name="tool"
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>Pie Pan
                            <input
                                type="checkbox"
                                id="supplies"
                                value='Pie Pan'
                                name="tool"
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

export default SuppliesList;