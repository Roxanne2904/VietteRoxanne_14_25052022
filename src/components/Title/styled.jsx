import styled from 'styled-components'
import { colors, display } from '../../utils/css'

export const StyledTitle = styled.div`
    display: ${display.flex};
    align-items: ${display.center};
    justify-content: ${display.center};
    color: ${colors.colorPrimary};
    font-family: Roboto;
    h1 {
        margin: 10px 25px;
        font-size: 2.3rem;
        color: ${colors.colorPrimary};
    }
`
export const StyledSecondariesTitle = styled.div`
    color: ${colors.colorPrimary};
    font-size: 1.2rem;
    ${({ width }) => width < 950 && 'font-size:0.9rem;'}
`
