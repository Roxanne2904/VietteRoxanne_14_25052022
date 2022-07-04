import styled from 'styled-components'
import { colors } from '../../utils/css/index'
import { Link } from 'react-router-dom'
//*Utils
import { LINK_PATTERN, display } from '../../utils/css/index'

export const StyledContainer = styled.div`
    display: ${display.flex};
    flex-direction: ${display.column};
    align-items: ${display.center};
    justify-content: ${display.center};
`

export const StyledSecondariesTitle = styled.h2`
    color: ${colors.colorPrimary};
    font-size: 1.5rem;
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
`
