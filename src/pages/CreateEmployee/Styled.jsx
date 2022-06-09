import styled from 'styled-components'
import { colors } from '../../utils/css/index'
import { Link } from 'react-router-dom'
import { LINK_PATTERN } from '../../utils/css/index'

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const StyledSecondariesTitle = styled.h2`
    color: ${colors.colorPrimary};
    font-size: 1.5rem;
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
`
