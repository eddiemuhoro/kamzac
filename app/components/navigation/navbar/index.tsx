import React, { FC } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ThemeSwitcher } from "./Button";

interface NavbarProps {
  toggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggle }) => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 z-10 backdrop-blur-md bg-opacity-50 ">
  <div className="container mx-auto px-4 h-full z-20">
    <div className="flex justify-between items-center h-full">
      <Logo />
      <div className="flex items-center">
        <ul className="hidden md:flex gap-x-6 text-white">
          <li>
            <Link href="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <p>Contacts</p>
            </Link>
          </li>
          <ThemeSwitcher />
        </ul>

        <button type="button" className="inline-flex items-center md:hidden"
          onClick={toggle}>
          {/* Menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24">
            <path fill="#fff"
              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
     
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Navbar;