import styled from 'styled-components'
import {
    colors,
    display,
    font,
    weight,
    numbers,
    DISPLAY_FLEX,
    DISPLAY_BLOCK,
    JUSTIFY_CONTENT_SPACE_BETWEEN,
    COLOR_PRIMARY,
} from '../../utils/css'

export const StyledUlBlockDatasEmployee = styled.ul`
    ${DISPLAY_FLEX}
    ${JUSTIFY_CONTENT_SPACE_BETWEEN}
    list-style-type: ${display.none};
    width: ${({ width }) => (width <= 1500 ? '99%' : '50%')};
    font-size: ${font.main};
    color: ${colors.darkerGrey};
    flex-wrap: wrap;
    border: solid ${numbers.one}px ${colors.colorPrimary};
    padding: 5px;
`
export const StyledLiBlockData = styled.li`
    ${DISPLAY_BLOCK}
    padding: 3px;
    width: 30%;
`
export const StyledCategories = styled.span`
    ${COLOR_PRIMARY}
    font-weight: ${weight.bold};
`
