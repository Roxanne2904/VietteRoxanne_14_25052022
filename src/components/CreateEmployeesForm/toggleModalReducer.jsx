import { createSlice } from '@reduxjs/toolkit'

const toggleModalSlide = createSlice({
    name: 'toggleModal',
    initialState: 'close',
    reducers: {
        resetEditForm: {
            reducer: (state) => {
                return (state = 'close')
            },
        },
        toggleModal: {
            reducer: (state) => {
                return state === 'open' ? 'close' : 'open'
            },
        },
    },
})

const { actions, reducer } = toggleModalSlide
export const actionsToggleModal = actions
export default reducer
