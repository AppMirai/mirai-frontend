import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import PageLayout from "../../PageLayout";

const FormProducts = () => {
  const BASE_URL = "http://20.89.56.97:5000/api";
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleChange = (event) => {
    console.log(event);
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const setFormdata = (payload) => {
    const formData = new FormData();
    Object.entries(payload).map(([key, value]) => {
      formData.append(key, value);
    });

    return formData;
  };

  const getCategories = async () => {
    let res = await axios.get(BASE_URL + "/categories");
    res = res?.data?.data;
    setCategories(res);
  };

  const getBrands = async () => {
    let res = await axios.get(BASE_URL + "/brands");
    res = res?.data?.data;
    setBrands(res);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = setFormdata(product);
    await axios
      .post(BASE_URL + "/products/create", payload, {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTY2OTI4NDYzNn0.M7r0GZjn3gSH59q0xy6TSVDwX-TFC3kaEQu1bXH6Fdk",
        },
      })
      .then((value) => console.log(value))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  return (
    <PageLayout>
      <form className="formproducts" onSubmit={handleSubmit}>
        <div className="flex flex-col text- py-2">
          <label>Name</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text- py-2">
          <label>Image</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="file"
            name="product_image"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text- py-2">
          <label>Price</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="text"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text- py-2">
          <label>Categories</label>
          {categories?.length !== undefined ? (
            <select onChange={handleChange} name="category_id">
              {categories?.map((item, idx) => (
                <option value={item?.id} key={idx}>
                  {item?.name}
                </option>
              ))}
            </select>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col text- py-2">
          <label>Brands</label>
          {brands?.length !== undefined ? (
            <select onChange={handleChange} name="brand_id">
              {brands?.map((item, idx) => (
                <option value={item?.id} key={idx}>
                  {item?.name}
                </option>
              ))}
            </select>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col text- py-2">
          <label>Description</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text- py-2">
          <label>Shopee</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="text"
            name="link_shopee"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col text- py-2">
          <label>Tokopedia</label>
          <input
            className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-200 focus:outline-none"
            type="text"
            name="link_tokopedia"
            onChange={handleChange}
          />
        </div>
        <button className="w-full my-5 py-2 bg-[#E66099] text-white rounded-lg">
          Send
        </button>
      </form>
    </PageLayout>
  );
};

export default FormProducts;
