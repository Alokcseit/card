import Product from "./Product";
function Showoroducts(productsdata) {
  const products = productsdata.prolist;
  const productelement = products.map((products) => (
    <Product key={products.id} pdata={products}></Product>
  ));
  return <div>{productelement}</div>;
}

export default Showoroducts;
