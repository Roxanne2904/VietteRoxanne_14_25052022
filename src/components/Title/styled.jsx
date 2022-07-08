import styled from 'styled-components'
import {
    numbers,
    DISPLAY_FLEX,
    ALIGN_ITEMS_CENTER,
    JUSTIFY_CONTENT_CENTER,
    COLOR_PRIMARY,
    POSITION_RELATIVE,
} from '../../utils/css'

export const StyledTitle = styled.div`
    ${DISPLAY_FLEX}
    ${ALIGN_ITEMS_CENTER}
    ${JUSTIFY_CONTENT_CENTER}
    ${COLOR_PRIMARY}
    font-family: Roboto;
    h1 {
        margin: ${({ width }) =>
            width < 500
                ? `${numbers.ten}px ${numbers.twenty}px`
                : `${numbers.twenty}px ${numbers.ten}px ${numbers.twenty}px 50px`};
        font-size: 2.3rem;
        ${COLOR_PRIMARY}
    }
`
export const StyledSecondariesTitle = styled.div`
    ${COLOR_PRIMARY}
    font-size: ${(props) =>
        props.text === 'Create Employee'
            ? '1.2rem'
            : props.width < 950
            ? '0.9rem'
            : '1.2rem'};
    h2 {
        ${(props) =>
            props.text === 'Create Employee' &&
            props.width < 950 &&
            `margin: 5px 0; ${POSITION_RELATIVE}; top:${numbers.twenty}px;`}
    }
`
