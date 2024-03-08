import ProductCard from "../components/ProductCard"

function Home() {
  return (
    <section className="container mx-auto mt-4">
        <h2 className="text-2xl font-semibold">Flash Sale</h2>
        <div className="flex gap-14 mt-4 align-middle justify-around">
            <div className="bg-red-200 w-[250px] h-[300px] rounded-2xl shadow-black shadow-3xl">
                <ProductCard />
            </div>
            <div className="bg-red-300 w-[250px] h-[300px] rounded-2xl shadow-black shadow-3xl"></div>
            <div className="bg-red-300 w-[250px] h-[300px] rounded-2xl shadow-black shadow-3xl"></div>
            <div className="bg-red-300 w-[250px] h-[300px] rounded-2xl shadow-black shadow-3xl"></div>
        </div>
        <h2 className="text-2xl font-semibold mt-4">Categories</h2>
        <div className="flex gap-14 mt-4 align-middle justify-around">
            <div className="bg-red-800 w-[650px] h-[250px] rounded-2xl shadow-black shadow-3xl"></div>
            <div className="bg-red-300 w-[650px] h-[250px] rounded-2xl shadow-black shadow-3xl"></div>
        </div>
    </section>
  )
}

export default Home