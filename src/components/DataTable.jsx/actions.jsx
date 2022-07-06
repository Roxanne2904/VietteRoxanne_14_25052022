import { selectEmployees } from '../../utils/selectors'
import { actionsEmployees } from '../CreateEmployeesForm/employeesReducer'

export const removedAnEmployee = (employee) => {
    return async (dispatch, getState) => {
        let employees = selectEmployees(getState()).employees
        const fullName = `${employee[0].lastName}${employee[0].firstName}`

        console.log(employees)
        for (let i = 0; i < employees.length; i++) {
            const currentFullName = `${employees[i].lastName}${employees[i].firstName}`
            const getId = currentFullName === fullName && employees[i].index
            getId !== false &&
                dispatch(actionsEmployees.editEmployeesDatas(getId))
        }
    }
}
