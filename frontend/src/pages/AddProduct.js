import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://dummyjson.com/products/add", {
                title,
                description,
            });

            console.log(response.data);
            setTitle("");
            setDescription("");
            alert("success add product");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="input-wrapper">
                <h2>Add Product</h2>
                <div>
                    {/* <label>Title:</label> */}
                    <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    {/* <label>Description:</label> */}
                    <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button className="btn" style={{ width: "40%", outline: "none" }}>
                    Tambah Produk
                </button>
            </form>
        </div>
    );
}

export default AddProduct;
