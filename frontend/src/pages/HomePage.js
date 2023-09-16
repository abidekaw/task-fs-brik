import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const totalPage = Math.ceil(100 / itemsPerPage);

    const getProducts = async (val) => {
        let url = `https://dummyjson.com/products`;
        const skip = (page - 1) * itemsPerPage;
        const pagination = `?limit=${itemsPerPage}&skip=${skip}`;
        const search = `/search?q=${val}`;
        val ? (url += search) : (url += pagination);
        setLoading(true);

        try {
            const res = await fetch(url);
            const resJson = await res.json();
            // console.log(resJson);
            setProducts(resJson.products);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const handleClickSearch = () => {
        getProducts(search);
    };

    useEffect(() => {
        getProducts();
    }, [page]);

    const prev = () => {
        setPage(page - 1);
    };

    const next = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <div className="search input-wrapper">
                <input type="search" placeholder="search..." onChange={(e) => setSearch(e.target.value)} />
                <button type="button" onClick={handleClickSearch} className="btn ">
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", width: "50%", margin: "20px auto" }}>
                <button type="button" onClick={prev} disabled={page === 1} className="btn">
                    prev
                </button>
                <p>
                    {page} / {totalPage}
                </p>
                <button type="button" onClick={next} disabled={page === totalPage} className="btn">
                    next
                </button>
            </div>
        </div>
    );
}

export default HomePage;
