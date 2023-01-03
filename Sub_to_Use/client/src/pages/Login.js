import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import SignUpForm from "../components/SignUpForm";

const Login = () => {
    const [currentForm, setCurrentForm] = useState("login");
    const changeFormOption = () => {
        if (currentForm !== "login") {
            return (
                <>
                    <div className="">
                        {/* <SignUpForm /> */}
                        <div className="">
                            {" "}
                            <button
                                id="backToLogin-btn"
                                className=""
                                onClick={() => setCurrentForm("login")}
                            >
                                Return to Login
                            </button>{" "}
                        </div>
                    </div>
                </>

            );
        }
        return (
            <>
                <div className="">
                    {/* <LoginForm /> */}
                    <div className="">
                        {" "}
                        <button
                            id="createAccount-btn"
                            className=""
                            onClick={() => setCurrentForm("signup")}
                        >
                            Create Account
                        </button>{" "}
                    </div>
                </div>
            </>

        );
    };
    const handleFormChange = (form) => setCurrentForm(form);
    return (
        <div>
            {handleFormChange}
            {changeFormOption()}
        </div>
    )
};

export default Login;