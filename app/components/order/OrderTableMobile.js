import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem } from "@/app/redux/slices/basketSlice";
import { timeAgo } from "@/app/utils/helpers";
import Link from "next/link";

const OrderTableMobile = ({id, order_id, items, created_at, payment_success, total}) => {
  const dispatch = useDispatch(id)

  return (
    <div className="md:hidden mb-5 border-b pb-5">
      <h3 className="truncate w-4/5">Order Id: {order_id} </h3>
      <p className="text-sm text-gray-500 mb-3">Ordered: {timeAgo(created_at)} ago</p>
      {items.map((item, i) => (
          <Link key={i} href={`/products/${item.id}`} >
            <h3 className="text-sm cursor-pointer hover:text-primary font-bold text-title">
            {item?.name} <span className="text-sm text-gray-500">( {item?.quantity} x)</span>            
            </h3>
          </Link>  
      ) )}
      <p className="text-sm text-gray-500 mt-3">Payment: {payment_success ? 'success' : 'failed'} </p>
      <p className="text-sm text-gray-500">Status: <span className="text-primary font-semibold">Pending</span></p>
      <p className="text-sm text-gray-500 mt-2">Total: <span className="text-green font-semibold">${total}</span></p>

      <div className="mt-2">
      <MdDelete onClick={() => dispatch(removeItem(id))} className="text-2xl cursor-pointer" />
      </div>
  </div>
  );
};

export default OrderTableMobile;
