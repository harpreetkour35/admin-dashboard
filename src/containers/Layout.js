import React, { useState } from "react";
import axios from "axios";
import { Content, Sidebar, Footer, Header } from "./index";

const URL = "http://localhost:3000/api/products";

function Layout() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //adding new product
  const addProducts = () => {
    axios
      .post(URL, {
        name: name,
        price: price,
        description: description,
      })
      .then((res) => {
        setProducts([
          ...products,
          {
            name: name,
            price: price,
            description: description,
          },
        ]);
        setName("");
        setPrice("");
        setDescription("");
      });
  };

  //getting all products
  const getData = async () => {
    const response = await axios.get(URL);
    setProducts(response.data);
    console.log(response.data);
  };

  //delete single product
  const deleteData = (id) => {
    axios.delete(`${URL}/${id}`).then((res) => console.log(res));
    const filteredProducts = products.filter((product) => id !== product._id);
    console.log(filteredProducts);
    setProducts(filteredProducts);
  };

  // edit single product
  const editData = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="c-app c-default-layout">
        <Sidebar />
        <div className="c-wrapper">
          <Header />
          <div className="c-body">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
