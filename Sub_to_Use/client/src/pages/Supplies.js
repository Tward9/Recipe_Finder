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
        //search ingredients bassed on ingredients and supplies selected
        navigate('/recipeList');
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
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Hand Mixer'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Hand Mixer</span>
                            </label>
                        </div>
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Baking Tray'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Baking Tray</span>
                            </label>
                        </div>
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Muffin Tin'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Muffin Tin</span>
                            </label>
                        </div>
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Food Processor'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Food Processor</span>
                            </label>
                        </div>
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Loaf Pan'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Loaf Pan</span>
                            </label>
                        </div>
                        <div className="checkBtn">
                            <label>
                                <input
                                    type="checkbox"
                                    id="supplies"
                                    value='Pie Pan'
                                    name="tool"
                                    onChange={handleInputChange}
                                />
                                <span>Pie Pan</span>
                            </label>
                        </div>
                        <button type='submit'>&#10145;</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SuppliesList;