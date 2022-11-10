import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const SuppliesList = ({suppliesFormData, setSuppliesFormData}) => {
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSuppliesFormData({ ...suppliesFormData, [name]: value });
    };
    return (
        <>
            <Header />
            <div>
                <div>
                    <h2>What Supplies do you want to use?</h2>
                </div>
                <div>
                    <form>

                    </form>
                </div>
            </div>
        </>
    )
}

export default SuppliesList;