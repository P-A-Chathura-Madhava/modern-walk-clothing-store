import { Link } from "react-router-dom"
import CategoriesCard from "../components/CategoriesCard"
import ProductCard from "../components/ProductCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductsLimit } from "../feature/products/productSlice"

function Home() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProductsLimit());
  },[])

  const productState = useSelector(state=>state.product.products);

  return (
    <section className="container mx-auto mt-2">
        <h2 className="text-2xl font-semibold">Flash Sale</h2>
        <div className="flex gap-14 mt-2 align-middle justify-around">
      {productState && productState?.map((item, index)=>{
          return(        <ProductCard title={item?.title} image={item?.image} price={item?.price} description={item?.description} />)
      })}


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