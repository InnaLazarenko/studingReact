import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>My Product</h1>
      <p>{params.productId}</p>
      <Link to=".." relative="path">go back</Link>
    </>
  );
};

export default ProductDetailPage;
