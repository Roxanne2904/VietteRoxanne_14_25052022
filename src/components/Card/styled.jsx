import styled from 'styled-components'
import { colors } from '../../utils/css'

export const StyledUlBlockDatasEmployee = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: ${({ width }) => (width <= 1500 ? '99%' : '50%')};
    font-size: 0.8rem;
    color: ${colors.darkerGrey};
    flex-wrap: wrap;
    border: solid 1px ${colors.colorPrimary};
    padding: 5px;
`
export const StyledLiBlockData = styled.li`
    display: block;
    padding: 3px;
    width: 30%;
`
export const StyledCategories = styled.span`
    color: ${colors.colorPrimary};
    font-weight: bold;
`
