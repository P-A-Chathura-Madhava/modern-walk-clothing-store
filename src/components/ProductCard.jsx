import mensClothImg from "../images/mc-demo.png";

function ProductCard(props) {
  const {title, image, price, description, color } = props;

  return (
    <div className="w-[290px] h-[345px] rounded-2xl shadow-black shadow-3xl">
      <div className="cardImageDiv pt-4 px-4">
      <div className="h-[62px] overflow-hidden">
      <h2 className="text-center text-xl font-bold mb-2">{title}</h2>
      </div>
      <img className="h-[150px] w-[120px] py-4" src={image} alt="mens-cloth-img" />
      </div>
      <div className={`py-2 ${color} rounded-2xl h-[90px] px-6 mt-7`}>
        <h2 className="text-center text-blue-600 text-2xl font-bold pb-2">{price}</h2>
        <p className="text-center font-medium truncate">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
