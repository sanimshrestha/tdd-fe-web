import { useDispatch, useSelector, useStore } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch, AppStore } from "./store"


// Export pretyped versions of the store hooks that you can use in your own
// Uset these throughout your app instead of plain `useDispatch`, `useSelector`, `useStore`
export const useAppDispatch : () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore