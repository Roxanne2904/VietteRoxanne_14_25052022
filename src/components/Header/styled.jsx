import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LINK_PATTERN, display } from '../../utils/css'

export const StyledHeader = styled.header`
    display: ${display.flex};
    justify-content: ${display.spaceBetween};
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
    ${(props) =>
        props.$headerLink &&
        `display:flex; align-items:center; margin:0 25px 0 0`}
`

export const StyledLinkTxt = styled.span`
    display: block;
`
export const StyledLinkIcon = styled.span`
    display: block;
    margin: 0 10px 0 0;
`
