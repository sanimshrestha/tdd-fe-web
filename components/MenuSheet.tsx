import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@ui/sheet"
import Link from "next/link"
import FeedbackForm from "./FeedbackForm"
import SearchBar from "./SearchBar"
import HamburgerIcon from "@icons/HamburgerIcon"
import LogoIcon from "@icons/LogoIcon"

function MenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent>
        <nav className="w-full flex flex-col items-start justify-between 
                        flex-wrap gap-5 bg-background z-20">
          <div className="flex sm:basis-[50px] md:basis-40 shrink">
            <Link href="/drinks">
              <LogoIcon
                color="var(--background)"
              />
            </Link>
          </div>

          <SearchBar className="flex w-full" />
          <div className="flex flex-col md:flex-row gap-2
                      text-base text-secondary-foreground font-semibold">
            <Link href="/" className="px-3 py-2">
              Home
            </Link>
            <FeedbackForm>
              <span className="px-3 py-2text-base 
                                text-secondary-foreground font-semibold">
                Send Feedback
              </span>
            </FeedbackForm>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MenuSheet
