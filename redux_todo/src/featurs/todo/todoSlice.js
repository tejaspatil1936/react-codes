import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world",
        }
    ],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addtodo: (state, action) => { 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
         },
        removetodo: () => {}
    }
})