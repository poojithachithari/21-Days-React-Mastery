import ProfileCard from "./components/ProfileCard";
import Modal from "./components/Modal";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <ProductCard header="Daily Products" footer='More Info' variant='secondary' info="Product 1 Info">
        <p>
          <strong>Name:</strong>Product1
        </p>
        <p><strong>Description:</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          cupiditate asperiores, facere officia minima unde alias ab accusantium
          similique quis ipsa voluptates veniam repellendus nisi debitis id non
          laboriosam velit tenetur iusto. Unde eveniet reprehenderit culpa fugit
          assumenda perspiciatis amet praesentium? Quasi consequatur maiores
          voluptates?
        </p>
      </ProductCard>

      <ProductCard header="Food" footer='Check Details' variant='primary' info="Product 2 Info">
        <p>
          <strong>Name:</strong>Product2
        </p>
        <p><strong>Description:</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          cupiditate asperiores, facere officia minima unde alias ab accusantium
          similique quis ipsa voluptates veniam repellendus nisi debitis id non
          laboriosam velit tenetur iusto. Unde eveniet reprehenderit culpa fugit
          assumenda perspiciatis amet praesentium? Quasi consequatur maiores
          voluptates?
        </p>
      </ProductCard>

      <ProductCard header="Daily Products" footer='Check Usage' variant='default' info="Product 3 Info">
        <p>
          <strong>Name:</strong>Product3
        </p>
        <p><strong>Description:</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          cupiditate asperiores, facere officia minima unde alias ab accusantium
          similique quis ipsa voluptates veniam repellendus nisi debitis id non
          laboriosam velit tenetur iusto. Unde eveniet reprehenderit culpa fugit
          assumenda perspiciatis amet praesentium? Quasi consequatur maiores
          voluptates?
        </p>
      </ProductCard>

      <ProductCard header="Daily Products" footer='More Info' variant='secondary' info="Product 4 Info">
        <p>
          <strong>Name:</strong>Product4
        </p>
        <p><strong>Description:</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          cupiditate asperiores, facere officia minima unde alias ab accusantium
          similique quis ipsa voluptates veniam repellendus nisi debitis id non
          laboriosam velit tenetur iusto. Unde eveniet reprehenderit culpa fugit
          assumenda perspiciatis amet praesentium? Quasi consequatur maiores
          voluptates?
        </p>
      </ProductCard>

      <ProductCard header="Daily Products" footer='More Info' variant='secondary' info="Product 5 Info">
        <p>
          <strong>Name:</strong>Product5
        </p>
        <p><strong>Description:</strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          cupiditate asperiores, facere officia minima unde alias ab accusantium
          similique quis ipsa voluptates veniam repellendus nisi debitis id non
          laboriosam velit tenetur iusto. Unde eveniet reprehenderit culpa fugit
          assumenda perspiciatis amet praesentium? Quasi consequatur maiores
          voluptates?
        </p>
      </ProductCard>
    </>
  );
}

export default App;
