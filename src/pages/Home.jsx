import { Link } from "react-router-dom"
import CategoriesCard from "../components/CategoriesCard"
import ProductCard from "../components/ProductCard"

function Home() {
  return (
    <section className="container mx-auto mt-2">
        <h2 className="text-2xl font-semibold">Flash Sale</h2>
        <div className="flex gap-14 mt-2 align-middle justify-around">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
        </div>
        <h2 className="text-2xl font-semibold mt-5">Categories</h2>
        <div className="flex gap-14 mt-2 align-middle justify-around">
                <Link to={"/mens-products"}><CategoriesCard clothType={"Men's Clothing"} color={"bg-[#2bd9af]"} /></Link>
                <Link to={"/womens-products"}><CategoriesCard clothType={"Women's Clothing"} color={"bg-[#ff5d84]"} /></Link>
        </div>
    </section>
  )
}

export default Home