import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [counter, setCounter] = useState(1);

    const getProducts = async (val, page) => {
        const params = val ? `/search?q=${val}` : "";
        setLoading(true);
        // https://dummyjson.com/products?limit=10&skip=10&select=title,price
        const res = await fetch(`https://dummyjson.com/products${params}`);
        const resJson = await res.json();
        console.log(resJson);
        setProducts(resJson.products);
        setLoading(false);
        // const totalPage = Math.ceil(resJson.total / resJson.limit)
        // const currentPage =
    };

    const handleClickSearch = () => {
        getProducts(search, counter);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const prev = () => {
        setCounter(counter <= 1 ? 1 : counter - 1);
    };

    const next = () => {
        // setCounter(counter >= totalPage ? totalPage : counter + 1)
    };

    return (
        <div>
            <div>
                <input type="search" placeholder="search..." onChange={(e) => setSearch(e.target.value)} />
                <button type="button" onClick={handleClickSearch}>
                    Search
                </button>
            </div>
            <div className="homepage">
                {loading
                    ? "Loading..."
                    : !loading && products.length === 0
                    ? "Product Not Found!"
                    : products.map((val) => (
                          <Link key={val.id} className="card" to={`/product/${val.id}`}>
                              <div className="img-wrapper">
                                  <img src={val.thumbnail} alt="" width={250} height={250} />
                              </div>
                              <div className="text-wrapper">
                                  <b>{val.title}</b>
                                  <p>{val.brand}</p>
                                  <p>Price : ${val.price}</p>
                                  <p>Rating : {val.rating}</p>
                              </div>
                          </Link>
                      ))}
            </div>
            <button type="button" onClick={prev}>
                prev
            </button>
            <p>1 / 3</p>
            <button type="button" onClick={next}>
                next
            </button>
        </div>
    );
}

export default HomePage;
