import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mt-4">
      <h2>Product Details</h2>
      <p>Details for product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
