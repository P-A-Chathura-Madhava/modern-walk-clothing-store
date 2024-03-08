import ProductCard from "../components/ProductCard";

function MensProducts() {
  return (
    <section className="container mx-auto my-4 pb-4">
      <h2 className="text-2xl font-bold">Men's Clothing</h2>
      <div className="mt-4 grid grid-cols-4 gap-y-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default MensProducts