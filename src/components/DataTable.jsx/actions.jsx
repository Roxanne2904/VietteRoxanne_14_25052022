import { selectEmployees } from '../../utils/selectors'
import { actionsEmployees } from '../CreateEmployeesForm/employeesReducer'

export const removedAnEmployee = (employee) => {
    return async (dispatch, getState) => {
        let employees = selectEmployees(getState()).employees
        employees.forEach((elt) => {
            const currentFirstNameEmployees = elt.firstName
            const currentLastNameEmployees = elt.lastName
            if (currentFirstNameEmployees === employee[0].firstName) {
                if (currentLastNameEmployees === employee[0].lastName) {
                    const number_nbIndexEmployee = employees.indexOf(elt)

                    dispatch(
                        actionsEmployees.editEmployeesDatas(
                            number_nbIndexEmployee
                        )
                    )
                }
            }
        })
    }
}
