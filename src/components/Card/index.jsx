import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";
import "./styles.css";

function Card({ data }) {
  const {
    cartProducts,
    setCartProducts,
    openProductDetail,
    closeProductDetail,
    openCheckOutSideMenu,
    setProductToShow,
  } = useContext(ShoppingCartContext);

  const handleShowProduct = () => {
    openProductDetail();
    setProductToShow(data);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const newProduct = { ...data, count: 1 };
    setCartProducts([...cartProducts, newProduct]);
    closeProductDetail();
    openCheckOutSideMenu();
  };

  const isInCart = cartProducts.some((item) => item.id === data.id);

  return (
    <div
      onClick={handleShowProduct}
      className="Card bg-white cursor-pointer w-56 h-60 rounded-lg active:scale-110 transition ease duration-75"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
          {data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title}
        />
        {isInCart ? (
          <button className="absolute m-2 top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full">
            <CheckIcon className="h-6 w-6 text-stone-100 p-1" />
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="absolute m-2 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full"
          >
            <PlusIcon className="h-6 w-6 text-black" />
          </button>
        )}
      </figure>
      <p className="flex justify-between px-1">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
}

export { Card };
