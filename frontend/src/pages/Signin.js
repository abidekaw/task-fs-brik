import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [isLoggedin]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/users/signin", {
                email,
                password,
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h3>Signin</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">email :</label>
                    <input type="email" required placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">password :</label>
                    <input type="password" required placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Signin</button>
            </form>
            <Link to="/signup">Sign Up</Link>
        </div>
    );
}

export default Signin;
