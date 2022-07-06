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
