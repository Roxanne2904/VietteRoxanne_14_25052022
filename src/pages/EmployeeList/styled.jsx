import styled from 'styled-components'
import { Link } from 'react-router-dom'
//*CSS
import { LINK_PATTERN } from '../../utils/css/index'
// //*Utils
// import { colors } from '../../utils/css'

export const StyledMainEmployeeListPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const StyledDataTableContent = styled.div`
    flex: 1;
    width: 70%;
`
export const StyledMainTitleContent = styled.div`
    margin: 0 0 25px;
    text-align: center;
`
export const StyledLink = styled(Link)`
    ${LINK_PATTERN}
`
