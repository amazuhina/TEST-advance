import {createSlice} from "@reduxjs/toolkit"
import {dropdownMenu} from "../consts";



const inputsSlice = createSlice({
    name: 'inputsSlice',

    initialState: {
        list: [
            {
                id: Math.random(),
                type: dropdownMenu.email,
                value: '',
            }
        ]
    },

    reducers: {
        addInput: (state, action) => {
            const newInput = action.payload.input
            const prevInputId = action.payload.prevInputId

            const idIndex = state.list.findIndex(i => i.id === prevInputId) + 1

            state.list.splice(idIndex, 0, newInput)
        },

        deleteInput: (state, action) => {
            const id = action.payload.id

            const idIndex = state.list.findIndex(i => i.id === id)

            state.list.splice(idIndex, 1)
        },

        editInput: (state, action) => {
            const id = action.payload.id
            const entity = action.payload.entity

            const idIndex = state.list.findIndex(i => i.id === id)

            const newListItem = {
              id,
              type: entity.type,
              value: entity.value,
            }

            state.list[idIndex] = newListItem
        },

        setValue: (state, action) => {
            const id = action.payload.id
            const value = action.payload.value

            const idIndex = state.list.findIndex(i => i.id === id)

            state.list[idIndex].value = value
        },

        setDropDown: (state, action) => {
            const id = action.payload.id
            const value = action.payload.value

            const idIndex = state.list.findIndex(i => i.id === id)

            state.list[idIndex].type = value
        }
    }
})


export const inputsSelector = (state) => state.inputReducer.list


export const {
    addInput,
    deleteInput,
    editInput,
    setValue,
    setDropDown
} = inputsSlice.actions


export const reducer = inputsSlice.reducer