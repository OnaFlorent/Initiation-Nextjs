import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";

const Links = [
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

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {Links.map((link, index) => {
          return <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-accent" } uppercase`}>{link.name}</Link>;
        })}
      </div>
    </nav>
  );
};

export default Nav;
