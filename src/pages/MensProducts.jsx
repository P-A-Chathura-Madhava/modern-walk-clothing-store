import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { getMensProducts, resetState } from "../feature/products/productSlice";

function MensProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMensProducts());
  }, []);

  const productState = useSelector((state) => state.product.mensProducts);

  return (
    <section className="container mx-auto my-4 pb-4">
      <h2 className="text-2xl font-bold">Men's Clothing</h2>
      <div className="mt-4 grid grid-cols-4 gap-y-8">
        {productState &&
          productState?.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item?.title}
                image={item?.image}
                price={item?.price}
                description={item?.description}
                color="bg-[#2bd9af]"
              />
            );
          })}
      </div>
    </section>
  );
}

export default MensProducts;
