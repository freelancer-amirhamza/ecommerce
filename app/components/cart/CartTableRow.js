import React from "react";
import Quantity from "../shared/Quantity";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "@/app/redux/slices/basketSlice";

const CartTableRow = ({id, name, image, price, weight , quantity}) => {
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
          <tr className="border-b md:border-r md:border-l table_row">
            <td className="py-5 pl-3">
              <img
                src={image}
                className="h-20 w-20 object-cover rounded-md"
                alt=""
              />
            </td>
            <td className="py-5 max-w-[250px]">
              
                <div className="">
                  <h1 className="text-lg font-bold text-title">{name}</h1>
                  <p className="text-color text-sm font-semibold">
                    Color: <span className="text-title">Black</span>
                  </p>
                  <p className="text-color text-sm font-semibold">
                    Weihgt <span className="text-title font-bold"> {weight} </span>
                  </p>
                </div>
              
            </td>
            <td className="py-5">{price}</td>
            <td className="py-5">
              <div className="w-32">
                <Quantity 
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
              </div>
            </td>
            <td className="py-5">${(quantity * price).toFixed()} </td>
            <td className="py-5">
              <MdDelete onClick={removeCart} className="text-2xl cursor-pointer" />
            </td>
          </tr> 
  );
};

export default CartTableRow;
