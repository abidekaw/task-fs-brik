import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddProduct from "./pages/AddProduct";

function App() {
    const userInfo = localStorage.getItem("userInfo");

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        window.location.href = "/signin";
    };

    return (
        <div>
            <BrowserRouter>
                <header>
                    <div className="nav">
                        <div>
                            <Link to="/">Toko Klontong</Link>
                        </div>
                        <div className="col-right">
                            {userInfo ? (
                                <>
                                    <Link to="/addproduct">Add Product</Link>
                                    <Link to="#logout" onClick={handleLogout}>
                                        logout
                                    </Link>
                                </>
                            ) : (
                                <Link to="/signin">Sign In</Link>
                            )}
                        </div>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/product/:slug" element={<ProductDetail />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/signin" element={<Signin />}></Route>
                        <Route path="/addproduct" element={<AddProduct />}></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
