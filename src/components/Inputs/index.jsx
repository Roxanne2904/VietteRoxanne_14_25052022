import { useCallback, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { DatePicker } from 'roxv-react-calendar'
//*styled
import {
    StyledInput,
    StyledErrorMessage,
    StyledCalendarComponent,
    StyledLabel,
    StyledSelectLabelTxt,
    colourStyles,
    StyledInputContent,
} from './styled'
//*reusableFunctions
import {
    myRegEx,
    handleOpeningOfDatePicker,
    handleDateOnChange,
} from './reusableFunctions'
import PropTypes from 'prop-types'

/**
 * This component returns different type of inputs including selects.
 * @returns { HTMLElements } It return a React Component.
 */
export default function Input({
    width,
    name,
    type,
    label,
    register,
    errors,
    control,
    options,
    myRef,
}) {
    const [isItOpen, setIsItOpen] = useState(false)
    const [validValue, setValidValue] = useState(null)

    useEffect(() => {
        const addBackDrop = (e) => {
            myRef !== undefined &&
                document.activeElement !== myRef.current &&
                setIsItOpen(false)
        }
        window.addEventListener('click', addBackDrop)

        return () => window.removeEventListener('click', addBackDrop)
    }, [myRef])

    const memorizeDatePickerCallback = useCallback(() => {
        handleOpeningOfDatePicker(myRef, setIsItOpen)
    }, [myRef, setIsItOpen])

    switch (type) {
        case 'text':
            if (name === 'dateOfBirth' || name === 'startDate') {
                const { ref, ...rest } = register(name, { required: true })

                return (
                    <StyledInputContent width={width} name={name}>
                        <StyledLabel
                            htmlFor={`${name}`}
                        >{`${label}`}</StyledLabel>
                        <Controller
                            name={`${name}`}
                            control={control}
                            render={() => {
                                return (
                                    <StyledInput
                                        type={`${type}`}
                                        name={`${name}`}
                                        id={`${name}`}
                                        onClick={memorizeDatePickerCallback}
                                        {...register(name, {
                                            onChange: (e) => {
                                                handleDateOnChange(
                                                    e,
                                                    myRegEx,
                                                    validValue,
                                                    setValidValue
                                                )
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
                                <DatePicker
                                    onChangeInputValue={validValue}
                                    myInputRef={myRef}
                                    mode={'blue'}
                                    valueCustom={'1'}
                                    language={'fr'}
                                    areDaysOutOfMonthAllowed={true}
                                    areSundaysAllowed={true}
                                    areSundaysHighlighted={true}
                                />
                            </div>
                        </StyledCalendarComponent>
                    </StyledInputContent>
                )
            }
            return (
                <StyledInputContent width={width} name={name}>
                    <StyledLabel htmlFor={`${name}`}>{`${label}`}</StyledLabel>
                    <Controller
                        name={`${name}`}
                        control={control}
                        render={() => (
                            <StyledInput
                                type={`${type}`}
                                name={`${name}`}
                                id={`${name}`}
                                {...register(name, { required: true })}
                            />
                        )}
                    />
                    <StyledErrorMessage>
                        {errors[name]?.message}
                    </StyledErrorMessage>
                </StyledInputContent>
            )
        case 'select':
            return (
                <div>
                    <Controller
                        name={`${name}`}
                        control={control}
                        render={({ field }) => (
                            <StyledLabel>
                                <StyledSelectLabelTxt>{`${label}`}</StyledSelectLabelTxt>
                                <Select
                                    {...field}
                                    isClearable // enable isClearable to demonstrate extra error handling
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={options}
                                    styles={colourStyles}
                                />
                            </StyledLabel>
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

Input.propTypes = {
    width: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    myRef: PropTypes.object.isRequired,
}

Input.defaultProps = {
    width: window.innerWidth,
    myRef: {},
    options: [],
}
