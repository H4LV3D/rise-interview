import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Link from "next/link";
import Arrow from "@/components/illustrations/icons/Arrow";

type Props = {};

const Footer = (props: Props) => {
  const footer = [
    {
      title: "logo",
      links: [
        {
          label: "About Us",
          link: "/about-us",
        },
        {
          label: "Careers",
          link: "/careers",
        },
        {
          label: "FAQs",
          link: "/faqs",
        },
        {
          label: "Contact Info",
          link: "/contact-us",
        },
        {
          label: "Press",
          link: "/press-release",
        },
        {
          label: "Rise Impact",
          link: "/rise-impact",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          label: "Investment Clubs",
          link: "/investment-clubs",
        },
        {
          label: "Blog",
          link: "/blog",
        },
      ],
    },
    {
      title: "Products",
      links: [
        {
          label: "Rise App",
          link: "/rise-app",
        },
        {
          label: "Wallets",
          link: "/wallets",
        },
        {
          label: "Assets Classes",
          link: "/assets-classes",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          label: "0818 714 7405",
          link: "tel:08187147405",
        },
        {
          label: "hello@rise.capital",
          link: "mailto:hello@rise.capital",
        },
        {
          label: "Newsletter",
          link: "/newsletter",
        },
        {
          label: "Instagram",
          link: "https://www.instagram.com/rise.capital/",
        },
        {
          label: "Twitter",
          link: "https://twitter.com/rise_capital",
        },
      ],
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-0 max-w-[1250px] mx-auto pt-[20px] pb-[80px] px-6 lg:px-0 ">
          {footer.map((column, index) => (
            <div key={index} className="space-y-4 ">
              {column.title === "logo" ? (
                <div className="min-h-10 flex items-center">
                  <BrandLogo />
                </div>
              ) : (
                <h3 className="text-lg font-[500] text-black min-h-10 flex items-center ">
                  <span className="">{column.title}</span>
                </h3>
              )}

              <div className="space-y-3.5 ">
                {column.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="flex items-center space-x-2 text-black hover:scale-105 transition-transform "
                  >
                    <span className="text-lg font-sans font-[400] ">
                      {link.label}
                    </span>
                    {column.title !== "logo" && (
                      <span className=" ">
                        <Arrow />
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
