import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("/api/users/signup", {
            name,
            email,
            password,
        });
        alert(`Registrasion Success! Hello ${name}`);
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        // navigate('/signin');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="input-wrapper">
                <h2>Sign Up</h2>
                <div>
                    {/* <label htmlFor="name">name :</label> */}
                    <input type="text" required placeholder="name" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    {/* <label htmlFor="email">email :</label> */}
                    <input type="email" required placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    {/* <label htmlFor="password">password :</label> */}
                    <input type="password" required placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn" style={{ width: "40%", outline: "none" }}>
                    Submit
                </button>
                <div>
                    <Link to="/signin">Sign In</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
