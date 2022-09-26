import React from "react";
import Hook from "../UseHooks/Hook";
import NavPar from "./Nav";
import Product from "./product";

function Products() {
  const [state] = Hook();

  return (
    <div>
      <NavPar />
      <Product data={state} />
    </div>
  );
}

export default Products;
