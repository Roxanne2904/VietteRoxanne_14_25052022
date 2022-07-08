import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    LINK_PATTERN,
    DISPLAY_BLOCK,
    DISPLAY_FLEX,
    ALIGN_ITEMS_CENTER,
    JUSTIFY_CONTENT_SPACE_BETWEEN,
    numbers,
} from '../../utils/css'

export const StyledHeader = styled.header`
    ${DISPLAY_FLEX}
    ${JUSTIFY_CONTENT_SPACE_BETWEEN}
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
    ${(props) =>
        props.$headerLink &&
        `${DISPLAY_FLEX}; ${ALIGN_ITEMS_CENTER}; margin:${numbers.zero} ${
            props.width < 500 ? `${numbers.twenty}px` : '50px'
        } ${numbers.zero} ${numbers.zero}`}
`

export const StyledLinkTxt = styled.span`
    ${DISPLAY_BLOCK}
`
export const StyledLinkIcon = styled.span`
    ${DISPLAY_BLOCK}
    margin: ${numbers.zero} ${numbers.ten}px ${numbers.zero} ${numbers.zero};
`
