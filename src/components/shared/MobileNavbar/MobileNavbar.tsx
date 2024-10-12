import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: { link: string; label: string }[];
  path: string;
}

const MobileNavbar = ({ links, isOpen, setIsOpen, path }: Props) => {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-full bg-white z-40 p-6 space-y-6"
      >
        <div className="flex items-start ">
          <div className="w-full space-y-6 ">
            <h1 className="font-[600] text-4xl pb-6 text-body-text ">Menu</h1>
            {links.map((link) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={link.link}
                href={link.link}
                className="block"
              >
                <p
                  className={`text-2xl ${
                    path === link.link
                      ? "text-brand-teal font-[500] "
                      : "text-neutral-600 hover:text-neutral-800 "
                  } `}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={26} className="md:hidden " />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNavbar;
