import Image from "next/image";
import Link from "next/link";
import Search from "../components/Search";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectTotalCartItems, selectTotalPrice } from "../redux/slices/basketSlice";

const Header = () => {
  const cartItems = useSelector(selectTotalCartItems)
  const totalPrice = useSelector(selectTotalPrice)
  return (
    <header className="bg-white py-7 border-b">
      <div className="container">
        {/* Header top area */}
        <div className=" flex justify-between items-center">
          {/* Logo  */}
          <Link href="/">
            <Image
              src="/logo.svg"
              width="160"
              height="55"
              objectFit="contain"
            />
          </Link>
          {/* Search  */}
          <Search />
          {/* Contact  */}
          <div className="lg:flex flex-col hidden">
            <span className="text-2xl font-bold">01792978577</span>
            <p className="self-end text-color">Support 24/7</p>
          </div>
          {/* Icons  */}
          <div className="flex items-center gap-5">
            <Link href="/my-account">
              <AiOutlineUser className="text-3xl text-title" />
            </Link>
            <Link href="/cart" className="flex items-center gap-5">
              <div className="relative">
                <AiOutlineShoppingCart className="text-3xl text-title" />
                <span className="absolute text-center bg-primary px-2 font-semibold -right-3 -top-2 text-sm rounded" >{cartItems || 0}</span>
              </div>
              <div className="hidden lg:block">
                <span className="text-color text-sm">Your Cart</span>
                <p className="text-title font-bold text-sm">$ {totalPrice}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
