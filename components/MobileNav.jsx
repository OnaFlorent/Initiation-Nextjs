"use client";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "À propos",
  },
  {
    href: "/treatments",
    name: "Nos soins",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMobileNav]);

  return (
    <nav
      ref={navRef}
      className="relative flex flex-col justify-between h-full p-8 bg-primary text-white"
    >
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNav(false)}
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-xl">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            onClick={() => setMobileNav(false)}
            className={`${
              pathname === link.href && "border-b-2 border-accent-100"
            } uppercase max-w-max mx-auto`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerStyles="text-lg flex gap-6 justify-center" />
    </nav>
  );
};

export default MobileNav;
