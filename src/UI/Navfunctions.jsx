import Modal from "@/UI/Modal";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Home,
  MenuIcon,
  Search,
  ShoppingCart,
  User2,
  Mail,
  ShoppingBag,
  Settings,
  UserRoundPen,
  LogOut,
  X,
} from "lucide-react";
import { MdClose } from "react-icons/md";

const Navfunctions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div>
      {/* Shopping Cart Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <ShoppingBag />
        </div>
        <hr />
        <div className="flex gap-8 items-center justify-between my-8">
          <Image width={100} height={50} src="/hero/desert.jpg" alt="Desert" />
          <div>
            <p className="font-semibold">Asgaard Sofa</p>
            <p>
              1 x <span className="text-orange-600">$ 17.59</span>
            </p>
          </div>
          <div className="rounded-full text-white bg-gray-600 p-2">
            <MdClose />
          </div>
        </div>
        <div className="flex gap-8 items-center justify-between my-8">
          <Image width={100} height={50} src="/hero/food.jpg" alt="Food" />
          <div>
            <p className="font-semibold">Pirogue</p>
            <p>
              1 x <span className="text-orange-600">$ 9.00</span>
            </p>
          </div>
          <div className="rounded-full text-white bg-gray-600 p-2">
            <MdClose />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <p>Subtotal</p>
          <p className="text-orange-500">$17.59</p>
        </div>
        <hr />
        <div className="flex gap-2 justify-between mt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="border rounded-md border-orange-500 px-4 py-2 hover:bg-orange-500">
            Close
          </button>
          <Link
            className="border rounded-md border-orange-500 px-4 py-2"
            href="/checkout">
            Checkout
          </Link>
        </div>
      </Modal>

      {/* User Modal */}
      <Modal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)}>
        <div className="flex flex-col mb-4">
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg">
                <User2 /> Shokhrukh
              </p>
              <p className="flex gap-2 dark:text-gray-400">
                <Mail /> Uphill7165@gmail.com
              </p>
            </li>
            <hr className="my-2" />
            <li>
              <p className="flex items-center gap-2">
                <UserRoundPen /> Profile
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2">
                <Settings /> Setting
              </p>
            </li>
            <hr className="m-2" />
            <li className="m-2">
              <p className="flex gap-2 text-orange-700">
                <LogOut /> Logout
              </p>
            </li>
          </ul>
          <button
            onClick={() => setIsUserModalOpen(false)}
            className="border rounded-md border-orange-500 px-4 py-2 hover:bg-orange-500 mt-4">
            Close
          </button>
        </div>
      </Modal>

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <div className="flex items-center py-3 px-2 dark:bg-gray-600 max-w-lg rounded-lg mt-4">
          <input className="bg-transparent border-none outline-none" />
          <Search />
        </div>
        <div
          className="absolute cursor-pointer top-2 left-2 text-gray-400">
          <X           onClick={() => setIsSearchOpen(false)}
/>
        </div>
      </Modal>

      {/* Icons for triggering modals */}
      <div className="flex gap-6">
        <User2
          className="hover:text-orange-500 duration-200 cursor-pointer"
          onClick={() => setIsUserModalOpen(true)}
        />
        <Search
          className="hover:text-orange-500 duration-200 cursor-pointer"
          onClick={() => setIsSearchOpen(true)}         />
        <Heart />
        <ShoppingCart
          className="hover:text-orange-500 duration-200 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navfunctions;
