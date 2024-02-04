"use client"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Input } from "./ui/input"
import { CommandShortcut } from "./ui/command"
import SearchCommandDialog from "./SearchCommandDialog"
import { useAppDispatch } from "@/redux/hooks"
import { setCommandDialogOpen } from "@/redux/features/ui"

export default function SearchBar({ className }: { className?: string }) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={`relative flex grow items-center w-auto max-w-lg 
                      ${className}`}>
        <MagnifyingGlassIcon
          className="ml-3 mr-2 h-4 w-4 shrink-0 opacity-50 
                    stroke-muted-foreground absolute" />
        <Input
          placeholder="Search drinks by name or ingredients"
          className="pl-9 border-border py-2.5 h-10"
          onClick={() => dispatch(setCommandDialogOpen(true))}
        />
        <CommandShortcut
          className="hidden sm:inline absolute right-0 mr-2 p-1 
                    border border-border-secondary rounded-sm">
          ⌘ K
        </CommandShortcut>
      </div>
      <SearchCommandDialog />
    </>
  )
}
