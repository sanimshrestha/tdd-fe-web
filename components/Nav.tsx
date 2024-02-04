"use client"
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";
import SearchBar from "./SearchBar";
import LogoIcon from "./icons/LogoIcon";

const Nav = () => {


  return (
    <>
      <nav className="w-full flex items-start justify-between flex-wrap gap-4 
                      p-4 h-16 border-b border-border-secondary sticky top-0 
                      bg-background z-20">
        <div className="flex sm:basis-[50px] md:basis-40 shrink">
          <Link href="/drinks">
            <LogoIcon
              color="var(--background)"
            />
          </Link>
        </div>

        <SearchBar className="hidden sm:flex" />
        <div className="flex justify-end basis-[50px] md:basis-40 shrink-0">
          <FeedbackForm>
          </FeedbackForm>
        </div>
        {/* <div className="flex sm:hidden justify-end basis-[50px] shrink-0 my-2">
          <MenuSheet />
        </div> */}

      </nav>
      <nav className="sm:hidden fixed bottom-0 w-full px-7 py-4
                      border-t border-border-secondary bg-background z-20">
        <SearchBar className="w-full" />
      </nav>
    </>
  );
};

export default Nav;
