import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [isLoggedin]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/users/signin", {
                email,
                password,
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/");
        } catch (err) {
            setError(err ? err.response.data.message : "");
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="input-wrapper">
                <h2>Please Sign In</h2>
                <div style={{ color: "red" }}>{error}</div>
                <div>
                    {/* <label htmlFor="email">email :</label> */}
                    <input type="email" required placeholder="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    {/* <label htmlFor="password">password :</label> */}
                    <input type="password" required placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn" style={{ width: "40%", outline: "none" }} type="submit">
                    Sign In
                </button>
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </form>
        </div>
    );
}

export default Signin;
