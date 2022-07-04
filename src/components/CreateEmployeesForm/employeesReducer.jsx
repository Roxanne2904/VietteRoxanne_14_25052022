import { createSlice } from '@reduxjs/toolkit'
import { formatAString } from '../../utils/format'

const initialState = {
    employees: [],
    message: null,
}

const employeesSlide = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        resetInitialState: {
            reducer: (draft) => {
                draft.employees = []
                draft.message = null
            },
        },
        addAnEmployee: {
            prepare: (employee) => ({ payload: employee }),
            reducer: (draft, action) => {
                //*every function
                function isItTheSameEmployee(currentValue) {
                    if (
                        formatAString(action.payload.firstName) ===
                            formatAString(currentValue.firstName) &&
                        formatAString(action.payload.lastName) ===
                            formatAString(currentValue.lastName)
                    ) {
                        return false
                    } else {
                        return true
                    }
                }
                //*
                if (draft.employees.length > 0) {
                    const booleenResponse =
                        draft.employees.every(isItTheSameEmployee)
                    if (booleenResponse === true) {
                        draft.employees.push(action.payload)
                        draft.message = 'Employee Created !'
                    } else {
                        draft.message = 'This employee already exists'
                    }
                } else {
                    draft.employees.push(action.payload)
                    draft.message = 'Employee Created !'
                    return
                }
            },
        },
        editEmployeesDatas: {
            prepare: (indexEmployee) => ({ payload: indexEmployee }),
            reducer: (draft, action) => {
                for (let i = 0; i < draft.employees.length; i++) {
                    draft.employees[i].index === action.payload &&
                        draft.employees.splice(
                            draft.employees.indexOf(draft.employees[i]),
                            1
                        )
                }
            },
        },
    },
})

const { actions, reducer } = employeesSlide
export const actionsEmployees = actions
export default reducer
