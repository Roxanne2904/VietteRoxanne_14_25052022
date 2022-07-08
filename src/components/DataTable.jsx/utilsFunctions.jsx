/**
 *This function allows you to create an array with several data
 *only composed of strings to inject them into the array later.
 * @param { Array.<...Object> } employeesArray
 * @param { String } employeesArray[i].city
 * @param { String } employeesArray[i].dateOfBirth
 * @param { Object } employeesArray[i].department
 * @param { String } employeesArray[i].firstName
 * @param { Number } employeesArray[i].index employeesArray[i].index as an integer.
 * @param { String } employeesArray[i].lastName
 * @param { String } employeesArray[i].startDate
 * @param { Object } employeesArray[i].states
 * @param { String } employeesArray[i].street
 * @param { String } employeesArray[i].zipCode
 * @returns { Array.<...Object> } it return an array with several object with only strings as value.
 */
export const createRowsDatas = (employeesArray) => {
    let rowsEmployees = []
    employeesArray.forEach((elt) => {
        rowsEmployees.push({
            firstName: `${elt.firstName}`,
            lastName: `${elt.lastName}`,
            startDate: `${elt.startDate}`,
            department: `${elt.department.label}`,
            dateOfBirth: `${elt.dateOfBirth}`,
            street: `${elt.street}`,
            city: `${elt.city}`,
            states: `${elt.states.label}`,
            zipCode: `${elt.zipCode}`,
        })
    })

    return rowsEmployees
}
