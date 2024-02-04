import Image from "next/image"
import React from "react"
import Link from "next/link";


const Footer = () => {
  return (
    <div className="mb-20 sm:mb-0 w-full flex flex-col sm:flex-row gap-4 
                    sm:gap-0 items-center justify-between p-4 sm:px-14
                    text-center">
      <Image
        src="/images/logo-tdd.svg"
        width={172}
        height={96}
        alt="TDD logo"
        className="max-w-[80px]"
      />
      {/* <div className="flex flex-col md:flex-row gap-2 md:gap-8 
                      text-base text-muted-foreground font-semibold">
        <Link href="/about">
          About
        </Link>
        <Link href="/contact-us">
          Contact Us
        </Link>
        <Link href="/terms-of-use">
          Terms of Use
        </Link>
        <Link href="/privacy">
          Privacy
        </Link>
      </div> */}
      <span className="text-base text-muted-foreground">
        © 2024 The Drinks Diary
      </span>
    </div>);
};

export default Footer;
