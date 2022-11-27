import React, { useState, useEffect } from "react";
import PageLayout from "../../PageLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TableProducts = () => {
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/formproducts");
  };

  const handleCreate = () => {};

  const handleDelete = (event) => {
    // axios
    //   .delete(`http://20.89.56.97:5000/api/products/delete/{id}`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
  };

  useEffect(() => {
    const x = localStorage.getItem("token");
    console.log(x);
    axios.get(`http://20.89.56.97:5000/api/products`).then((res) => {
      const { data } = res.data;
      setProduct(data);
    });
  }, []);

  if (!product) return "No Product";
  return (
    <PageLayout>
      <table className="table-fixed">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Shopee</th>
            <th scope="col">Tokopedia</th>
            {<th scope="col">Action</th>}
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) => {
            return (
              <>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.product_image_url}</td>
                  <td>Rp. {item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.link_shopee}</td>
                  <td>{item.link_tokopedia}</td>
                  <td className="flex">
                    <button
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 me-3"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </PageLayout>
  );
};

export default TableProducts;
