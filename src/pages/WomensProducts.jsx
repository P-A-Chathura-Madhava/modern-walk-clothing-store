import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import {
  getWomensProducts,
  resetState,
} from "../feature/products/productSlice";

function WomensProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWomensProducts());
  }, []);

  const productState = useSelector((state) => state.product.womensProducts);

  return (
    <section className="container mx-auto my-4 pb-4">
      <h2 className="text-2xl font-bold">Women's Clothing</h2>
      <div className="mt-4 grid grid-cols-4 gap-y-8">
        {productState &&
          productState?.map((item, index) => {
            return (
              <ProductCard
                title={item?.title}
                image={item?.image}
                price={item?.price}
                description={item?.description}
                color="bg-[#ff5d84]"
              />
            );
          })}
      </div>
    </section>
  );
}

export default WomensProducts;
