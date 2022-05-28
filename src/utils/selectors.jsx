export const selectToggleModal = (state) => {
    let toggleModalState = state.persistedReducer.toggleModal
    return toggleModalState
}

export const selectEmployees = (state) => {
    let employeesState = state.persistedReducer.employees
    return employeesState
}
