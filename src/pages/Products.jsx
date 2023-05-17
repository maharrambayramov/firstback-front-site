import React, { useEffect, useState } from "react";
import axios from "axios"

const Products = () => {
  const [data , setData] = useState([])


  const getData = async ()=>{
    const res = await axios.get("http://localhost:5050/users")
    setData(res.data)
    console.log(res.data);
  }

  useEffect(() =>{
    getData()
  }, [])
  return (
    <div className="products">
      <p className="paraph">Popular item in the market</p>
      <h2>Trending Product</h2>
      <div className="line"></div>
      {data.map((d)=>(
        <div className="cards">
        <div className="card">
          <img
            src=""
            alt=""
          />
          <p className="category">{d.password}</p>
          <p className="name">{d.username}</p>
          <p className="price">$150.00</p>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      ))}
    </div>
  );
};

export default Products;
