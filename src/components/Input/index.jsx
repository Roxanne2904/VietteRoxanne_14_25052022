import { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { Calendar } from 'rv-react-plugin-calendar'

//*styled
import {
    StyledInput,
    StyledErrorMessage,
    StyledCalendarComponent,
    StyledLabel,
} from './styled'
//*reusableFunctions
import { colors } from '../../utils/css'

export default function Input({
    name,
    type,
    label,
    register,
    errors,
    control,
    options,
    action,
    myRef,
}) {
    let myRegEx =
        /^([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))(\/)(0[1-9]|1[0-2])(\/)([+-]?\d{4}|(0[1-9]|[12][0-9]|3[01]))$/g
    const [isItOpen, setIsItOpen] = useState(false)
    const [validValue, setValidValue] = useState(null)
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            borderColor: `${colors.grey}`,
            boxShadow: `0 0 0 1px ${colors.grey}`,
            cursor: 'pointer',
            ':hover': {
                borderColor: `${colors.colorPrimary}`,
                boxShadow: `0 0 0 1px ${colors.colorPrimary}`,
            },
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => ({
            ...styles,
            background: isDisabled
                ? undefined
                : isSelected
                ? `${colors.colorPrimary}`
                : isFocused
                ? `${colors.colorPrimaryLessOpacity}`
                : undefined,
            cursor: isDisabled ? 'not-allowed' : 'pointer',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: `${colors.colorPrimary}`,
            fontWeight: 600,
        }),
    }

    useEffect(() => {
        const addBackDrop = (e) => {
            console.log(myRef)
            myRef !== undefined &&
                document.activeElement !== myRef.current &&
                setIsItOpen(false)
        }
        window.addEventListener('click', addBackDrop)

        return () => window.removeEventListener('click', addBackDrop)
    }, [myRef])

    const HandleOpeningOfDatePicker = () => {
        myRef.current.focus()
        setIsItOpen(true)
    }

    function handleOnchange(e) {
        // console.log(value)
        let value = e.target.value //let's obtain our value!
        let isItValidValue = myRegEx.test(value) //Let's test our current value with our pattern!

        if (isItValidValue) {
            //if it's true ..
            if (validValue === null || validValue !== value) {
                // let's check if our state is currently null or not equal to value!...
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
                //...else ... let set validValue!
                setValidValue(value)
            }
        }
    }

    switch (type) {
        case 'text':
            if (name === 'dateOfBirth' || name === 'startDate') {
                const { ref, ...rest } = register(name, { required: true })

                return (
                    <div>
                        {' '}
                        <StyledLabel
                            htmlFor={`${name}`}
                        >{`${label}`}</StyledLabel>
                        <Controller
                            name={`${name}`}
                            control={control}
                            onChange={handleOnchange}
                            render={() => {
                                return (
                                    <StyledInput
                                        type={`${type}`}
                                        name={`${name}`}
                                        onClick={() =>
                                            HandleOpeningOfDatePicker()
                                        }
                                        {...register(name, {
                                            onChange: (e) => {
                                                handleOnchange(e)
                                            },
                                        })}
                                        {...rest}
                                        ref={(e) => {
                                            ref(e)
                                            myRef.current = e
                                        }}
                                    />
                                )
                            }}
                        />
                        <StyledErrorMessage>
                            {errors[name]?.message}
                        </StyledErrorMessage>
                        <StyledCalendarComponent state={isItOpen.toString()}>
                            <div
                                style={{
                                    position: 'relative',
                                    top: '4px',
                                    right: '6px',
                                }}
                            >
                                <Calendar
                                    onChangeInputValue={validValue}
                                    myInputRef={myRef}
                                    mode={'blue'}
                                    areDaysOutOfMonthAllowed={true}
                                    areSundaysAllowed={false}
                                />
                            </div>
                        </StyledCalendarComponent>
                    </div>
                )
            }
            return (
                <div>
                    {' '}
                    <StyledLabel htmlFor={`${name}`}>{`${label}`}</StyledLabel>
                    <Controller
                        name={`${name}`}
                        control={control}
                        render={() => (
                            <StyledInput
                                type={`${type}`}
                                name={`${name}`}
                                // onChange={(e) => console.log(e.target.value)}
                                {...register(name, { required: true })}
                            />
                        )}
                    />
                    <StyledErrorMessage>
                        {errors[name]?.message}
                    </StyledErrorMessage>
                </div>
            )
        case 'select':
            // if (name === 'pages') {
            //     return (
            //         <StyledPageSizeContent>
            //             <StyledLabel
            //                 htmlFor={`${name}`}
            //             >{`${label}`}</StyledLabel>
            //             <Select
            //                 id="page-size"
            //                 options={options}
            //                 styles={colourStyles}
            //                 defaultValue={options[0]}
            //                 onChange={action}
            //             />
            //         </StyledPageSizeContent>
            //     )
            // }
            return (
                <div>
                    <StyledLabel htmlFor={`${name}`}>{`${label}`}</StyledLabel>
                    <Controller
                        name={`${name}`}
                        control={control}
                        render={({ field }) => (
                            <Select
                                // defaultValue={department[0]}
                                {...field}
                                isClearable // enable isClearable to demonstrate extra error handling
                                isSearchable={false}
                                className="react-dropdown"
                                classNamePrefix="dropdown"
                                options={options}
                                styles={colourStyles}
                            />
                        )}
                    />
                    <StyledErrorMessage>
                        {errors[name]?.message || errors[name]?.label.message}
                    </StyledErrorMessage>
                </div>
            )

        default:
            return
    }
}
