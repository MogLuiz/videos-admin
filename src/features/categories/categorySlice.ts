import { createSlice } from "@reduxjs/toolkit"

interface Category {
  id: string
  name: string
  deleted_at: string | null
  is_active: boolean
  created_at: string
  updated_at: string | null
  description: string | null
}

export interface CategoryState {
  data: Category[]
}

export const initalState: CategoryState = {
  data: [
    {
      id: "234234234",
      name: "Test",
      deleted_at: null,
      is_active: true,
      created_at: "2021-01-01",
      updated_at: null,
      description: null,
    },
  ],
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initalState,
  reducers: {
    createCategory: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export default categoriesSlice.reducer
