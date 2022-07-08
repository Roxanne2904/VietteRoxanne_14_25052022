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
 * This function manages if the value renter when changing is valid or not.
 * @param { Object } event Event listener.
 * @param { Object } myRegEx simply a RegEx.
 * @param { Object } validValue is the initial state of useState()
 * @param { Function } setValidValue is the "set function" using on useState().
 */
export function handleDateOnChange(event, myRegEx, validValue, setValidValue) {
    let value = event.target.value //let's obtain our value!
    let isItValidValue = myRegEx.test(value) //Let's test our current value with our pattern!

    if (isItValidValue) {
        if (validValue === null || validValue !== value) {
            const AreThereARepetitionbByTwo =
                value.split('/')[0].length && value.split('/')[2].length === 2
            const AreThereARepetitionbByThree =
                value.split('/')[0].length && value.split('/')[2].length === 3

            !AreThereARepetitionbByTwo &&
                !AreThereARepetitionbByThree &&
                setValidValue(value)
        }
    }
}
