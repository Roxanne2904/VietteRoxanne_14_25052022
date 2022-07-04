import styled from 'styled-components'
import { colors, display } from '../../utils/css'

export const StyledTitle = styled.div`
    display: ${display.flex};
    align-items: ${display.center};
    justify-content: ${display.center};
    color: ${colors.colorPrimary};
    font-family: Roboto;
    h1 {
        margin: 20px 0 10px 0;
        font-size: 2.3rem;
        color: ${colors.colorPrimary};
    }
`
