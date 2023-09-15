import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
    return (
        <div>
            <BrowserRouter>
                <header>
                    <div className="nav">
                        <div className="col-left">
                            <Link to="/">Toko Klontong</Link>
                        </div>
                        <div className="col-right">
                            <Link to="/signin">Sign In</Link>
                        </div>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/product/:slug" element={<ProductDetail />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/signin" element={<Signin />}></Route>
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
