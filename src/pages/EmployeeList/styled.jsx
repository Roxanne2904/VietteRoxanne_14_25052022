import styled from 'styled-components'
import { Link } from 'react-router-dom'
//*CSS
import { LINK_PATTERN, display } from '../../utils/css/index'

export const StyledMainEmployeeListPage = styled.main`
    display: ${display.flex};
    flex-direction: ${display.column};
    justify-content: ${display.center};
    align-items: ${display.center};
    height: 100vh;
`
export const StyledDataTableContent = styled.div`
    flex: 1;
    width: 70%;
`
export const StyledMainTitleContent = styled.div`
    margin: 0 0 25px;
    text-align: ${display.center};
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
`
