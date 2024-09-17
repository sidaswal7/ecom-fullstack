import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleForm = async (e) => {
    try {
      e.preventDefault();
      if(!product.name || !product.price || !product.category || !product.company){
        console.log("field empty")
        setError(true)
        return false;
      }
      let userId = JSON.parse(localStorage.getItem("user"))._id;
      let productInfo = { ...product, userId: userId };
      console.log(productInfo);
      let response = await fetch(
        `http://localhost:4000/products/add-products`,
        {
          method: "POST",
          body: JSON.stringify(productInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProduct({
        name: "",
        price: "",
        category: "",
        company: "",
      });
      let data = await response.json();
      console.log(data);
      navigate("/products")
    
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="my-5 text-3xl font-bold text-center">Add Products</h1>
      <div className="flex justify-center items-center">
        <form
          className="py-5 px-6 rounded-md shadow-lg mb-20"
          onSubmit={handleForm}
        >
          <div className="my-2">
            <label htmlFor="name" className="font-semibold text-slate-800">
              Product Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter the product"
              name="name"
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
            />
            {error && !product.name && <span className="font-semibold text-red-500 text-sm">Field is empty!</span>}
          </div>
          <div className="my-2">
            <label htmlFor="price" className="font-semibold text-slate-800">
              Price:{" "}
            </label>
            <input
              id="price"
              type="text"
              placeholder="Enter the price"
              name="price"
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  price: e.target.value,
                }))
              }
            />
            {error && !product.price && <span className="font-semibold text-red-500 text-sm">Field is empty!</span>}
          </div>
          <div className="my-2">
            <label htmlFor="category" className="font-semibold text-slate-800">
              Product Category:{" "}
            </label>
            <select
              id="category"
              type="text"
              placeholder="Enter the product"
              name="category"
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))
              }
            >
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="vehicle">Vehicle</option>
            </select>
            {error && !product.category && <span className="font-semibold text-red-500 text-sm">Field is empty!</span>}
          </div>
          <div className="my-2">
            <label htmlFor="company" className="font-semibold text-slate-800">
              Company:{" "}
            </label>
            <input
              id="company"
              type="text"
              placeholder="Enter brand name"
              name="company"
              className="block w-full px-3 my-1 placeholder:text-sm bg-slate-100 py-1"
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  company: e.target.value,
                }))
              }
            />
            {error && !product.company && <span className="font-semibold text-red-500 text-sm">Field is empty!</span>}
          </div>
          <div className="flex justify-center my-2">
            <button
              className="w-full px-2 py-1 bg-orange-500 text-white hover:bg-orange-600 my-2 rounded shadow-md mt-4"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
