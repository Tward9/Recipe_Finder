import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {

    return (
        <>
            <Header />
            <Link className='' to='/Ingredients'>
                Enter Ingredients + Supplies
            </Link>
            <Link className='' to='/RecipeList'>
                My Saved Recipes
            </Link>
        </>
    )
};
<button>

</button>

export default Home;