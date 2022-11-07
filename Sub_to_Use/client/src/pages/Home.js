import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {

    return (
        <>
            <Header />
            <Link className='' to='/ingredients'>
                Enter Ingredients + Supplies
            </Link>
            <Link className='' to='/recipeList'>
                My Saved Recipes
            </Link>
        </>
    )
};

export default Home;