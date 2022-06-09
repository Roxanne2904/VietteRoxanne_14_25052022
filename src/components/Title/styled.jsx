import styled from 'styled-components'
import { colors } from '../../utils/css'

export const StyledTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.colorPrimary};
    font-family: Roboto;
    h1 {
        margin: 20px 0 10px 0;
        font-size: 2.3rem;
        color: ${colors.colorPrimary};
    }
`
