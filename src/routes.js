import React from "react";

const Products = React.lazy(() => import("./views/products/Products"));
const Product = React.lazy(() => import("./views/products/Product"));
const Users = React.lazy(() => import("./views/users/Users"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/products", exact: true, name: "Products", component: Products },
  {
    path: "/products/:id",
    exact: true,
    name: "Product Details",
    component: Product,
  },
];

export default routes;
