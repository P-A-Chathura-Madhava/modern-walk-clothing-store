import mensClothImg from "../images/mc-demo.png";

function ProductCard() {
  return (
    <div className="w-[290px] h-[345px] rounded-2xl shadow-black shadow-3xl">
      <div className="cardImageDiv pt-4 px-4">
      <h2 className="text-center text-xl font-bold mb-2">Mens Cotton Jacket</h2>
      <img className="h-[150px] w-[150px]" src={mensClothImg} alt="mens-cloth-img" />
      </div>
      <div className="py-2 bg-[#2bd9af] rounded-2xl">
        <h2 className="text-center text-blue-600 text-2xl font-bold">Rs 55.99</h2>
        <p className="text-center font-medium">
          Great outerwear jackets for Spring/Autumn/Winter, suitable for many
          occasions, such as working, hiking...
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
