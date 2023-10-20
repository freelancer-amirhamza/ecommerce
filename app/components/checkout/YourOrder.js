
import { useSelector } from "react-redux"
import { FormBtn } from "../shared/form"
import { selectItems, selectTotalPrice } from "@/app/redux/slices/basketSlice"

const YourOrder = ({ placeOrder, loading}) => {

const cartItems = useSelector(selectItems)
const cartTotal = useSelector(selectTotalPrice)




    // const placeOrder = async (values) => {
    //     setLoading(true)
    // }

  return (
    <div>
        <h3 className="text-2xl mb-4">Your Order</h3>
        <div className="bg-gray-100 p-5 rounded-md">
        <div className="flex justify-between pb-5 border-b ">
            <h2 className="text-base font-bold">PRODUCT</h2>
            <h2 className="text-base font-bold">TOTAL</h2>
        </div>
        <div className=" border-b space-y-3 bg-white ">
        {cartItems.map((item, i) => (
            <div key={i} className="flex justify-between py-5 px-5 border-b  ">
            <h2 className="text-base font-bold">
               {item?.name} <span className="text-color text-sm">(x{item?.quantity})</span>
            </h2>
            <h2 className="text-base font-bold ml-2">${item?.price}</h2>
        </div>
        ))}
      
        </div>
        <div className="flex justify-between py-5 border-b">
            <h2 className="text-base font-bold">Subtotal</h2>
            <h2 className="text-base font-bold text-green">${cartTotal}</h2>
        </div>
        <div className="py-5 border-b space-y-3 ">
            <span className="text-title">Shipping</span>
            <ul className="">
                <li>- Flat rate</li>
            </ul>
            <p>Shipping to <strong>BD</strong></p>
        </div>
        <div className="flex justify-between py-5 border-b">
            <h2 className="text-lg font-bold">Total</h2>
            <h2 className="text-lg font-bold text-green">${cartTotal}</h2>
        </div>
        <div className="pt-5 border-b">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <h2 className="mt-3 text-gray-500">Pay with a Credit/Debit Card</h2>
        </div>
        </div>
        <FormBtn
           title='Place Order'
           onClick={placeOrder}
           loading={loading}
                      />
    </div>
  )
}

export default YourOrder