import React from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "../shared/Quantity";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "@/app/redux/slices/basketSlice";

const CartTableMobile = ({id, name, image, price, weight , quantity}) => {
  const dispatch = useDispatch()
  const removeCart = () => {
     dispatch(removeItem(id))
  }

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(id))
  }

const decreaseQuantity = () => {
  dispatch(decreaseItemQuantity(id))
}
  return (
    <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
    <div className="">
      <img
        src={image} className="h-20 w-20 object-cover rounded-md"
        alt=""
      />
    </div>
    <div className="flex-grow space-y-1">
      <h1 className="text-lg font-bold text-title">{name}</h1>
      <p className="text-color text-sm font-semibold">
        Color: <span className="text-title">Black</span>
      </p>
      <p className="text-color text-sm font-semibold">
        Weight: <span className="text-title font-bold">{weight}</span>
      </p>
      <div className="py-2">
      <Quantity 
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
      </div>
      <p className="text-color text-sm font-semibold">
        Price: <span className="text-green font-bold">{(quantity * price).toFixed()} </span>
      </p>
     
    </div>
    <div className="mt-2">
      <MdDelete onClick={removeCart}  className="text-2xl cursor-pointer" />
    </div>
  </div>
  );
};

export default CartTableMobile;
