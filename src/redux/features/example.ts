import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type InitialState = {
  value: ExampleState;
}

type ExampleState = {
  name: string;
  age: number;
}

const initialState:InitialState = {
  value: {
    name: "",
    age: 0,
  } as ExampleState,
}

export const example = createSlice({
  name: "example",
  initialState,
  reducers: {
    clearExample: () => {
      return initialState
    },
    setName: (state, action: PayloadAction<string>) => {
      state.value.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.value.age = action.payload
    },

  },
})
export const { clearExample, setName, setAge } = example.actions
export default example.reducer