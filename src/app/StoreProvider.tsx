'use Client'
import { AppStore, makeStore } from "@/redux/store"
import { useRef } from "react"
import { Provider } from "react-redux"


export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}