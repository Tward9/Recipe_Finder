import React, { useState } from "react";
import Auth from "../../utils/auth";

const LoginForm = (props) => {
    const [formState, setFormState] = useState({ email: "", password: "" });
    // eslint-disable-next-line
    const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: "",
            password: "",
        });
    };

    return (
        <>
            <div className="">
                <h4 className="">Login</h4>
                <div className="">
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className=""
                                placeholder="email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className=""
                                placeholder="********"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button
                                id="loginSubmit"
                                className=""
                                style={{ cursor: "pointer" }}
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {error && (
                        <div className="my-3 p-3 bg-danger text-white">
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LoginForm;
