import { Controller } from 'react-hook-form'
import Select from 'react-select'
//*utils
import { statesBis } from '../../utils/selectDatas/states/index'
import { department } from '../../utils/selectDatas/department'
//*styled
import { StyledInput, StyledErrorMessage } from './styled'
import { colors } from '../../utils/css'

export default function Input({
    name,
    type,
    label,
    register,
    errors,
    control,
}) {
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

    switch (type) {
        case 'text':
            return (
                <div>
                    {' '}
                    <label htmlFor={`${name}`}>{`${label}`}</label>
                    <Controller
                        name={`${name}`}
                        control={control}
                        render={() => (
                            <StyledInput
                                type={`${type}`}
                                name={`${name}`}
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
            if (name === 'department') {
                return (
                    <div>
                        <label htmlFor={`${name}`}>{`${label}`}</label>
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
                                    options={department}
                                    styles={colourStyles}
                                />
                            )}
                        />
                        <StyledErrorMessage>
                            {errors[name]?.message ||
                                errors[name]?.label.message}
                        </StyledErrorMessage>
                    </div>
                )
            } else {
                return (
                    <div>
                        <label htmlFor={`${name}`}>{`${label}`}</label>
                        <Controller
                            name={`${name}`}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    // defaultValue={statesBis[0]}
                                    {...field}
                                    isClearable // enable isClearable to demonstrate extra error handling
                                    isSearchable={false}
                                    className="react-dropdown"
                                    classNamePrefix="dropdown"
                                    options={statesBis}
                                    styles={colourStyles}
                                />
                            )}
                        />
                        <StyledErrorMessage>
                            {errors[name]?.message ||
                                errors[name]?.label.message}
                        </StyledErrorMessage>
                    </div>
                )
            }

        default:
            return
    }
}
