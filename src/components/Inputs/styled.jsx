import styled from 'styled-components'
//*CSS
import {
    font,
    colors,
    radius,
    display,
    numbers,
    MIN_WIDTH_PATTERN,
    DISPLAY_BLOCK,
    POSITION_RELATIVE,
} from '../../utils/css/index'

export const StyledInput = styled.input`
    ${MIN_WIDTH_PATTERN}
    border:${display.none};
    border-radius: ${radius.main};
    transition: all 300ms ease-in-out;
    box-shadow: 0px 0px 3px ${colors.colorPrimary};
    margin: 5px 0 0 0;
    padding: 7px;
    &:focus {
        outline: none;
        transform: scale(1.05);
        box-shadow: 0px 0px 4px ${colors.colorPrimary};
    }
`
export const StyledErrorMessage = styled.span`
    color: red;
    font-size: ${font.main};
`
export const StyledLabel = styled.label``
export const StyledSelectLabelTxt = styled.span`
    ${DISPLAY_BLOCK}
    margin: 15px 0 5px 0;
`
export const StyledCalendarComponent = styled.div`
    display: ${({ state }) =>
        state === 'true' ? `${display.flex}` : `${display.none}`};
    z-index: ${numbers.one};
    position: ${display.absolute};
`
export const StyledInputContent = styled.div`
    ${POSITION_RELATIVE}
    bottom: 5px;
    margin-top: ${({ name }) => {
        if (
            name === 'firstName' ||
            name === 'lastName' ||
            name === 'dateOfBirth' ||
            name === 'startDate'
        ) {
            return '29px'
        } else {
            return '15px'
        }
    }};
`

export const colourStyles = {
    control: (styles) => ({
        ...styles,
        borderColor: `${colors.darkerGrey}`,
        boxShadow: `0 0 0 ${numbers.one}px ${colors.grey}`,
        cursor: 'pointer',
        ':hover': {
            borderColor: `${colors.colorPrimary}`,
            boxShadow: `0 0 0 ${numbers.one}px ${colors.colorPrimary}`,
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
