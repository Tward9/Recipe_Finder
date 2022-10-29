import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Title = () => {

    return(
        <div>
            <h1>
                Sub to Use
            </h1>
            <Link to="/home">
                Let's Bake!
            </Link>
        </div>
    )
};

export default Title;