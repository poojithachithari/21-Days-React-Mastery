import React, { useState, useMemo , useCallback} from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";
const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [search,setSearch] = useState('')
  console.log('📦 Products component rendered');
  const handleSearchChange = useCallback((value)=>{
    setSearch(value);
  },[]);
  const products = [
    { id: 1, name: "Shampoo", price: 20 },
    { id: 2, name: "Conditioner", price: 24 },
    { id: 3, name: "Hair Mask", price: 50 },
    { id: 4, name: "Hair Serum", price: 45 },
    { id: 5, name: "Hair Oil", price: 30 },
    { id: 6, name: "Face Wash", price: 15 },
    { id: 7, name: "Face Cream", price: 35 },
    { id: 8, name: "Body Lotion", price: 25 },
    { id: 9, name: "Sunscreen", price: 40 },
    { id: 10, name: "Moisturizer", price: 28 },
    { id: 11, name: "Lip Balm", price: 8 },
    { id: 12, name: "Hand Cream", price: 12 },
    { id: 13, name: "Foot Cream", price: 18 },
    { id: 14, name: "Eye Cream", price: 45 },
    { id: 15, name: "Night Cream", price: 50 },
    { id: 16, name: "Day Cream", price: 42 },
    { id: 17, name: "Toner", price: 22 },
    { id: 18, name: "Cleanser", price: 19 },
    { id: 19, name: "Exfoliator", price: 27 },
    { id: 20, name: "Face Scrub", price: 16 },
    { id: 21, name: "Body Scrub", price: 24 },
    { id: 22, name: "Body Wash", price: 18 },
    { id: 23, name: "Shower Gel", price: 20 },
    { id: 24, name: "Soap", price: 5 },
    { id: 25, name: "Deodorant", price: 12 },
    { id: 26, name: "Perfume", price: 80 },
    { id: 27, name: "Cologne", price: 75 },
    { id: 28, name: "Nail Polish", price: 10 },
    { id: 29, name: "Nail Remover", price: 8 },
    { id: 30, name: "Makeup Remover", price: 15 },
    { id: 31, name: "Cotton Pads", price: 6 },
    { id: 32, name: "Face Masks", price: 25 },
    { id: 33, name: "Sheet Mask", price: 5 },
    { id: 34, name: "Hair Gel", price: 14 },
    { id: 35, name: "Hair Spray", price: 18 },
    { id: 36, name: "Hair Wax", price: 16 },
    { id: 37, name: "Hair Color", price: 35 },
    { id: 38, name: "Beard Oil", price: 22 },
    { id: 39, name: "Beard Balm", price: 20 },
    { id: 40, name: "Shaving Cream", price: 12 },
    { id: 41, name: "Aftershave", price: 18 },
    { id: 42, name: "Razor", price: 25 },
    { id: 43, name: "Toothpaste", price: 5 },
    { id: 44, name: "Toothbrush", price: 8 },
    { id: 45, name: "Mouthwash", price: 10 },
    { id: 46, name: "Dental Floss", price: 6 },
    { id: 47, name: "Bath Salts", price: 15 },
    { id: 48, name: "Bubble Bath", price: 18 },
    { id: 49, name: "Bath Bombs", price: 12 },
    { id: 50, name: "Body Butter", price: 28 }
  ];

  console.log('Filtering Products...(This will happen on every render!)');
// useMemo caches the filtered result!
  const filteredProducts = useMemo(() => {
    console.log('🔄 Filtering products with useMemo...');
    return products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])  // Only re-filter when search changes!
 
  return (
    <div>
      <h2>Products</h2>
      <SearchBar search={search} onSearchChange={handleSearchChange}/>
       <p style={{ color: '#666', marginBottom: '20px' }}>
        Showing {filteredProducts.length} of {products.length} products
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{product.name}</h3>
            <p
              style={{ fontSize: "20px", color: "#667eea", fontWeight: "bold" }}
            >
              {product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Add To Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
