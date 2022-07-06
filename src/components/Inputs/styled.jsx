import styled from 'styled-components'
//*CSS
import {
    MIN_WIDTH_PATTERN,
    colors,
    radius,
    display,
    numbers,
} from '../../utils/css/index'

export const StyledInput = styled.input`
    ${MIN_WIDTH_PATTERN}
    border:${display.none};
    border-radius: ${radius.main};
    transition: all 300ms ease-in-out;
    box-shadow: 0px 0px 3px ${colors.colorPrimary};
    &:focus {
        outline: none;
        transform: scale(1.05);
        box-shadow: 0px 0px 4px ${colors.colorPrimary};
    }
`
export const StyledErrorMessage = styled.span`
    color: red;
    font-size: 0.8rem;
`
export const StyledLabel = styled.label`
    margin-top: 0.5rem;
    margin-bottom: 10px;
`
export const StyledSelectLabelTxt = styled.span`
    display: ${display.block};
    margin-bottom: 0.5rem;
`
export const StyledCalendarComponent = styled.div`
    display: ${({ state }) =>
        state === 'true' ? `${display.flex}` : `${display.none}`};
    z-index: ${numbers.one};
    position: absolute;
`
export const StyledInputContent = styled.div`
    ${({ width }) =>
        width > 950 && '    margin-top: 30px;position: relative;bottom: 5px;'}
`

export const colourStyles = {
    control: (styles) => ({
        ...styles,
        borderColor: `${colors.darkerGrey}`,
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
    placeholder: (styles) => ({
        ...styles,
        color: `${colors.darkerGrey}`,
    }),
}
