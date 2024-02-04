'use client'
import React, { useEffect, useState } from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import DiceIcon from "./icons/DiceIcon"
import MessageSmileSquare from "./icons/MessageSmileSquare"
// import MessageChatBubble from "./icons/MessageChatBubble"
// import FileIcon from "./icons/FileIcon"
import { Button } from "./ui/button"
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon"
import { useGetDrinksQuery } from "@/redux/services/drinks"
import { getAllDrinksOutput } from "@/api/schema/drink.schema"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"
import ArrowUpIcon from "./icons/ArrowUpIcon"
import ArrowDownIcon from "./icons/ArrowDownIcon"
import EnterIcon from "./icons/EnterIcon"
import {
  setCommandDialogOpen,
  setFeedbackDialogOpen,
  uiState
} from "@/redux/features/ui"

type SearchDrinks = {
  slug: string
  name: string
  ingredients: string
}[]

function SearchCommandDialog() {
  const { data } = useGetDrinksQuery();
  const { recentDrinks, commandDialogOpen } =
    useAppSelector<uiState>((state) => state.ui);
  const dispatch = useAppDispatch();
  const allDrinks: getAllDrinksOutput | undefined = data;
  const [drinks, setdrinks] = useState<SearchDrinks>();
  const [commandInput, setcommandInput] = useState("");
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        dispatch(setCommandDialogOpen(!commandDialogOpen))
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (allDrinks?.length === 0) {
      setdrinks([])
    } else {
      setdrinks(allDrinks?.map((drink) => {
        return {
          name: drink.name,
          slug: drink.slug,
          ingredients: drink.ingredients.map(
            (ingredient) => ingredient.name).join(', ')
        }
      }))
    }
  }, [allDrinks]);


  const handleSearch = (value: string) => {
    setcommandInput(value)
  }

  const onCommandSelect = (path: string) => {
    dispatch(setCommandDialogOpen(false))
    router.push(path)
  }
  const onOpenChange = (open: boolean) => {
    dispatch(setCommandDialogOpen(open))
  }

  const onRandomDrink = () => {
    if (!allDrinks) return
    const randomDrink = allDrinks[Math.floor(Math.random() * allDrinks.length)];
    onCommandSelect(`/drinks/${randomDrink.slug}`)
  }

  const onFeedbackSelect = () => {
    dispatch(setCommandDialogOpen(false))
    dispatch(setFeedbackDialogOpen(true))
  }


  return (
    <CommandDialog open={commandDialogOpen} onOpenChange={onOpenChange}
    >
      <CommandInput
        placeholder="Search drinks by name or ingredients..."
        onValueChange={handleSearch}
      />
      <CommandSeparator className="bg-accent/70 h-1" />
      <CommandList>
        <CommandEmpty
          className="cmdk-empty flex flex-col items-center 
                      justify-start text-center p-6 pb-10
                      bg-command-empty-pattern bg-center">
          <div className="border border-border p-2.5 rounded-lg w-12 h-12 mb-4">
            <MagnifyingGlassIcon />
          </div>
          <h5 className="text-foreground font-semibold">No drinks found</h5>
          <span className="text-sm max-w-96">
            “Moet” did not match any drink. Would you like to suggest a drink?
          </span>
          <div className="mt-6 flex gap-3">
            <Button variant="secondary">Suggest drink</Button>
            <Button onClick={onRandomDrink}>Random drink</Button>
          </div>
        </CommandEmpty>

        {(commandInput.length === 0 && recentDrinks.length != 0) &&
          <>
            <CommandGroup heading={"Recent"}>
              {recentDrinks?.map((recentDrink) => (
                <CommandItem key={recentDrink.slug}
                  value={recentDrink.name + " " + recentDrink.ingredients}
                  className="flex flex-col items-start"
                  onSelect={
                    () => onCommandSelect(`/drinks/${recentDrink.slug}`)
                  }
                >
                  <span className="font-medium">{recentDrink.name}</span>
                  <span className="text-popover-foreground">
                    {recentDrink.ingredients.join(', ')}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        }

        {(commandInput.length !== 0) &&
          <div className="flex flex-col cmdk-search-list">
            <CommandGroup heading={"Cocktails"}>
              {drinks?.map((drink) => (
                <CommandItem key={drink.slug}
                  value={drink.name + " " + drink.ingredients}
                  className="flex flex-col items-start"
                  onSelect={() => onCommandSelect(`/drinks/${drink.slug}`)}
                >
                  <span className="font-medium">{drink.name}</span>
                  <span className="text-popover-foreground">
                    {drink.ingredients}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <div className="cmdk-footer flex justify-start 
                            items-center gap-2 py-2 px-4">
              <CommandShortcut
                className="m-0 h-7 w-7 p-1 border 
                            border-border-secondary rounded-lg" >
                <ArrowUpIcon className="scale-[0.8]" />
              </CommandShortcut>
              <CommandShortcut
                className="m-0 h-7 w-7 p-1 
                border border-border-secondary rounded-lg" >
                <ArrowDownIcon className="scale-[0.8]" />
              </CommandShortcut>
              <span className="text-sm text-popover-foreground mr-2">
                to navigate
              </span>
              <CommandShortcut className="m-0 h-7 w-7 p-1 border 
                                          border-border-secondary rounded-lg" >
                <EnterIcon className="scale-[0.8]" />
              </CommandShortcut>
              <span className="text-sm text-popover-foreground mr-2">
                to select
              </span>
              <CommandShortcut
                className="m-0 h-7 w-auto p-1 
                border border-border-secondary rounded-lg" >
                <span>esc</span>
              </CommandShortcut>
              <span className="text-sm text-popover-foreground">to close</span>
            </div>
          </div>
        }

        <CommandGroup>
          <CommandItem onSelect={onRandomDrink}>
            <div className="border border-border p-2.5 rounded-lg mr-2">
              <DiceIcon className="h-4 w-4" />
            </div>
            <span>Random Cocktail</span>
          </CommandItem>
          <CommandItem onSelect={onFeedbackSelect}>
            <div className="border border-border p-2.5 rounded-lg mr-2">
              <MessageSmileSquare className="h-4 w-4" />
            </div>
            <span>Send feedback</span>
          </CommandItem>
          {/* <CommandItem onSelect={() => onCommandSelect(`/aboutus`)}>
            <div className="border border-border p-2.5 rounded-lg mr-2">
              <FileIcon className="h-4 w-4" />
            </div>
            <span>About us</span>
          </CommandItem>
          <CommandItem onSelect={() => onCommandSelect(`/contactus`)}>
            <div className="border border-border p-2.5 rounded-lg mr-2">
              <MessageChatBubble className="h-4 w-4" />
            </div>
            <span>Contact us</span>
          </CommandItem> */}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default SearchCommandDialog
