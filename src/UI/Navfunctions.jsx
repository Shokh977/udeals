import Modal from "@/UI/Modal";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useStoreAuth from '@/store/useAuthStore';

import {
  Heart,
  ShoppingCart,
  User2,
  Mail,
  UserRoundPen,
  Settings,
  LogOut,
  X,
  Search
} from "lucide-react";
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/navigation';

const Navfunctions = () => {
  const { logout, user, checkAuth } = useStoreAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogOut = () => {
    logout();
    router.push('/');
  };

  return (
    <div className="flex gap-4 items-center">
      {/* Shopping Cart Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <ShoppingCart />
        </div>
        <hr />
        <div className="flex flex-col gap-4 my-4">
          {/* Sample Product Item */}
          <div className="flex items-center justify-between p-2 border rounded-lg">
            <Image width={100} height={50} src="/hero/desert.jpg" alt="Desert" />
            <div className="flex-1 mx-4">
              <p className="font-semibold">Asgaard Sofa</p>
              <p>1 x <span className="text-orange-600">$ 17.59</span></p>
            </div>
            <MdClose className="text-gray-600 cursor-pointer" />
          </div>
          <div className="flex items-center justify-between p-2 border rounded-lg">
            <Image width={100} height={50} src="/hero/food.jpg" alt="Food" />
            <div className="flex-1 mx-4">
              <p className="font-semibold">Pirogue</p>
              <p>1 x <span className="text-orange-600">$ 9.00</span></p>
            </div>
            <MdClose className="text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between my-4 font-semibold">
          <p>Subtotal</p>
          <p className="text-orange-500">$26.59</p>
        </div>
        <hr />
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="border rounded-md border-orange-500 px-4 py-2 hover:bg-orange-500 transition duration-200">
            Close
          </button>
          <Link
            className="border rounded-md border-orange-500 px-4 py-2 hover:bg-orange-500 transition duration-200"
            href="/checkout">
            Checkout
          </Link>
        </div>
      </Modal>

      {/* User Modal */}
      <Modal isOpen={isUserModalOpen} onClose={() => setIsUserModalOpen(false)}>
        <div className="flex flex-col mb-4 max-w-lg">
          <div className="flex flex-col gap-2 mb-4">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <User2 /> {user?.name}
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Mail /> {user?.email}
            </p>
          </div>
          <hr className="my-2" />
          <ul className="flex flex-col gap-2">
            <li>
              <p className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                <UserRoundPen /> Profile
              </p>
            </li>
            <li>
              <p className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                <Settings /> Settings
              </p>
            </li>
            <hr className="my-2" />
            <li>
              <p onClick={handleLogOut} className="flex items-center gap-2 cursor-pointer hover:text-orange-500">
                <LogOut /> Logout
              </p>
            </li>
          </ul>
          <button
            onClick={() => setIsUserModalOpen(false)}
            className="border rounded-md border-orange-500 px-4 py-2 hover:bg-orange-500 mt-4 transition duration-200">
            Close
          </button>
        </div>
      </Modal>

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
        <div className="flex items-center py-3 px-2 bg-gray-100 rounded-lg mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none flex-1"
          />
          <button className="text-gray-600">
            <Search />
          </button>
          <X onClick={() => setIsSearchOpen(false)} className="cursor-pointer text-gray-400" />
        </div>
      </Modal>

      {/* Icons for triggering modals */}
      <div className="flex gap-4">
        <User2
          className="hover:text-orange-500 transition duration-200 cursor-pointer"
          onClick={() => setIsUserModalOpen(true)}
        />
        <Search
          className="hover:text-orange-500 transition duration-200 cursor-pointer"
          onClick={() => setIsSearchOpen(true)}
        />
        <Heart className="hover:text-orange-500 transition duration-200 cursor-pointer" />
        <ShoppingCart
          className="hover:text-orange-500 transition duration-200 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navfunctions;
