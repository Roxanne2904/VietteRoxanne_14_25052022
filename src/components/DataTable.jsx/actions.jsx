import { selectEmployees } from '../../utils/selectors'
import { actionsEmployees } from '../CreateEmployeesForm/employeesReducer'

/**
 * This function uses Redux and reducer actions to remove an employee from stored data.
 * @param { Object } employee
 * @param { String } employee.city
 * @param { String } employee.dateOfBirth
 * @param { String } employee.department
 * @param { String } employee.firstName
 * @param { String } employee.lastName
 * @param { String } employee.startDate
 * @param { String } employee.states
 * @param { String } employee.street
 * @param { String } employee.zipCode
 * @returns { ASYNC_FUNCTION } it returns a function-like action.(Thunk middleware from redux)
 */
export const removedAnEmployee = (employee) => {
    return async (dispatch, getState) => {
        let employees = selectEmployees(getState()).employees
        const fullName = `${employee[0].lastName}${employee[0].firstName}`

        for (let i = 0; i < employees.length; i++) {
            const currentFullName = `${employees[i].lastName}${employees[i].firstName}`
            const getId = currentFullName === fullName && employees[i].index
            getId !== false &&
                dispatch(actionsEmployees.editEmployeesDatas(getId))
        }
    }
}
