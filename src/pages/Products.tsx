import { useState } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../types/Product";

const Products: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Business Cards",
      description: "High-quality business cards.",
      image: "/images/cards.jpg",
    },
    {
      id: 2,
      name: "Flyers",
      description: "Custom flyers for promotions.",
      image: "/images/flyers.jpg",
    },
    {
      id: 3,
      name: "Banners",
      description: "Large format banners.",
      image: "/images/banners.jpg",
    },
  ]);

  return <ProductList products={products} />;
};

export default Products;
