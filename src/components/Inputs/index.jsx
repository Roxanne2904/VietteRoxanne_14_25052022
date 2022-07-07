import { useCallback, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { Calendar } from 'rv-react-plugin-calendar'
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

export default function Input({
    width,
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
                    <StyledInputContent width={width}>
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
                                <Calendar
                                    onChangeInputValue={validValue}
                                    myInputRef={myRef}
                                    mode={'blue'}
                                    valueCustom={'1'}
                                    areDaysOutOfMonthAllowed={true}
                                    areSundaysAllowed={false}
                                />
                            </div>
                        </StyledCalendarComponent>
                    </StyledInputContent>
                )
            }
            return (
                <StyledInputContent width={width}>
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
