"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navfunctions from "@/UI/Navfunctions";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { ToggleButton } from "@/UI/ToggleButton";
import Modal from "@/UI/Modal";
import { SignUp } from "./auth/SignUp";

const Navbar = () => {


  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();


  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const link = "/";
  const isActive = (path) => pathname === path

  return (
    <nav>
      {/* Desktop Navbar */}
      <div className="lg:flex hidden justify-between px-16 h-24 items-center">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">U</span>Deals
        </h1>
        <div>
          <ul className="flex items-center gap-8 text-lg">
            <li>
              <Link
                className={
                  isActive("/")
                    ? "text-orange-500 transition-all duration-300"
                    : ""
                }
                href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActive("/shop")
                    ? "text-orange-500 transition-all duration-300"
                    : ""
                }
                href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActive("/about")
                    ? "text-orange-500 transition-all duration-300"
                    : ""
                }
                href="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActive("/contact")
                    ? "text-orange-500 transition-all duration-300"
                    : ""
                }
                href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <ToggleButton />
            </li>
          </ul>
        </div>
        {/* conditional */}
        {true? <Navfunctions /> : <SignUp/>}
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between px-8 h-24 items-center">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">U</span>Deals
        </h1>
        <div className="flex gap-2">
          <ToggleButton />
          <MenuIcon
            className="text-orange-500 size-8 cursor-pointer"
            onClick={handleOpen}
          />
        </div>
        <div
          className={`fixed top-[95px] right-0 h-full w-[80%] z-20 rounded-lg p-8 flex flex-col items-center gap-8 bg-orange-500 text-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex justify-between w-full pb-8">
            <Navfunctions />
          </div>
          <ul className="flex flex-col gap-8 text-2xl">
            <li>
              <Link href={link}>Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
