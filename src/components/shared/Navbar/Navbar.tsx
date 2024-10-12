"use client";
import React, { useState } from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BRAND_COLOR, MAX_SCREEN_CONTENT_WIDTH } from "@/constatnts/constants";
import { IoMdMenu } from "react-icons/io";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

type Props = {};

const Navbar = (props: Props) => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Products",
      link: "/products",
    },
    {
      label: "Investment Club",
      link: "/investment-club",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "FAQs",
      link: "/faq",
    },
  ];

  return (
    <>
      <div
        className={`mx-auto w-full h-[60px] md:h-[91px] px-6 lg:px-0 flex items-center justify-between `}
        style={{
          maxWidth: MAX_SCREEN_CONTENT_WIDTH,
        }}
      >
        <Link href={"/"} className="block  md:pl-[50px] ">
          <BrandLogo color={BRAND_COLOR} />
        </Link>

        <button onClick={toggleNavbar}>
          <IoMdMenu size={26} className="md:hidden " />
        </button>

        <div className="hidden md:flex items-center space-x-6 ">
          {navItems.map((item, index) => (
            <Link key={index} href={item.link} className="block relative ">
              <p
                className={` ${
                  path === item.link ? "font-[600] " : "font-[400] "
                } text-lg text-brand-teal inline-flex `}
              >
                <span className="">{item.label}</span>
                {item.label === "Products" && (
                  <IoIosArrowRoundDown size={26} className="text-brand-teal" />
                )}
              </p>

              {path === item.link && (
                <div className="absolute -bottom-2.5 left-1/2 w-2 h-2 rounded-full bg-brand-teal "></div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {
        <MobileNavbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          links={navItems}
          path={path}
        />
      }
    </>
  );
};

export default Navbar;
