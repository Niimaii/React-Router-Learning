import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className="section product">
      <h4>{productId}</h4>
      <Link to="/products" className="btn">
        Products
      </Link>
    </section>
  );
};

export default SingleProduct;
