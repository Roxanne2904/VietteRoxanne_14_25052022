export const myRegEx =
    /^([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)(0[1-9]|1[0-2])(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))$/g

/**
 * This Function is handling the display of the date picker on focus.
 * @param { Object } domElement
 * @param { Function } setCurrentState is the "set function" using on useState().
 */
export const handleOpeningOfDatePicker = (domElement, setCurrentState) => {
    domElement.current.focus()
    setCurrentState(true)
}
/**
 * This Function is handling the display of the date picker on focus on keydown.
 * @param { Object } event
 * @param { Object } domElement
 * @param { Function } setCurrentState is the "set function" using on useState().
 */
export const handleOpeningOfDatePickerOnKeyDown = (
    event,
    domElement,
    setCurrentState
) => {
    if (event.keyCode === 13) {
        domElement.current.focus()
        setCurrentState(true)
    }
}

/**
 * This function manages if the value renter when changing is valid or not.
 * @param { Object } event Event listener.
 * @param { Object } myRegEx simply a RegEx.
 * @param { Object } validValue is the initial state of useState()
 * @param { Function } setValidValue is the "set function" using on useState().
 */
export function handleDateOnChange(event, myRegEx, validValue, setValidValue) {
    let value = event.target.value
    let isItValidValue = myRegEx.test(value)
    if (isItValidValue) {
        if (validValue === null || validValue !== value) {
            if (
                value.split('/')[0].length === 2 &&
                value.split('/')[2].length === 2
            ) {
                return
            }
            if (
                value.split('/')[0].length === 3 &&
                value.split('/')[2].length === 3
            ) {
                return
            }
            setValidValue(value)
        }
    }
}
