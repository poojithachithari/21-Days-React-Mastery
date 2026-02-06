import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductImage from "./components/ProductImage";

function App() {
  return (
    <>
      <Header heading="Product Gallery" />
      <div className="product-gallery">
      <ProductCard productName="Ceramic Vase" productPrice="200">
        <ProductImage
          url="https://images.pexels.com/photos/6757651/pexels-photo-6757651.jpeg"
          altText="VaseImage"
          height="100"
          width="80"
        />
      </ProductCard>

      <ProductCard productName="Glass Vase" productPrice="500">
        <ProductImage
          url="https://images.pexels.com/photos/4041361/pexels-photo-4041361.jpeg"
          altText="VaseImage"
          height="100"
          width="80"
        />
      </ProductCard>
      <ProductCard productName="Brass Vase" productPrice="900">
        <ProductImage
          url="https://images.pexels.com/photos/1708850/pexels-photo-1708850.jpeg"
          altText="VaseImage"
          height="100"
          width="80"
        />
      </ProductCard>
      </div>
    </>
  );
}

export default App;
