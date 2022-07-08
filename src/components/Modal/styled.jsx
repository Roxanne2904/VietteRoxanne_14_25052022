import styled from 'styled-components'
//*Utils
import {
    weight,
    numbers,
    display,
    colors,
    radius,
    POSITION_PATTERN,
    COLOR_PRIMARY,
    POSITION_ABSOLUTE,
    FLEX_DIRECTION_COLUMN,
    DISPLAY_FLEX,
} from '../../utils/css'

export const StyledTxtModal = styled.p`
    display: ${({ toggleModal }) =>
        toggleModal === 'open' ? `${display.flex}` : `${display.none}`};
    border-radius: ${radius.secondary};
    background: ${colors.white};
    box-shadow: ${numbers.zero}px ${numbers.zero}px ${numbers.ten}px
        ${colors.black};
    ${COLOR_PRIMARY}
    font-weight: ${weight.bold};
    ${POSITION_ABSOLUTE}
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${numbers.one};
    background: #f1f1f1;
    padding: 17px 31px;
    width: ${({ id, width }) =>
        id === 'warning'
            ? width < 800
                ? '60%'
                : '50%'
            : width < 800
            ? '50%'
            : `${numbers.twenty}%`};
    ${({ id }) => id === 'warning' && `${FLEX_DIRECTION_COLUMN}`};
`
export const StyledModalContent = styled.div`
    background-color: ${colors.black};
    opacity: 0.72;
    ${POSITION_PATTERN}
`
export const StyledModal = styled.div`
    ${POSITION_PATTERN}
`
export const StyledButtonsContent = styled.span`
    ${DISPLAY_FLEX}
    justify-content: flex-end;
    margin-top: ${numbers.ten}px;
`
