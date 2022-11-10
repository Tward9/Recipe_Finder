import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const SuppliesList = ({ checkedSupplies, setCheckedSupplies }) => {

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setSuppliesFormData({ ...suppliesFormData, [name]: value });
    // };
    const handleInputChange = (position) => {
        const updatedCheckedSupplies = checkedSupplies.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedSupplies(updatedCheckedSupplies);
    }
    return (
        <>
            <Header />
            <div>
                <div>
                    <h2>What Supplies do you want to use?</h2>
                </div>
                <div>
                    <form>
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default SuppliesList;