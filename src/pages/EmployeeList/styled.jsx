import styled from 'styled-components'
//*CSS
import { display } from '../../utils/css/index'

export const StyledEmployeeListPageContent = styled.div`
    display: ${display.flex};
    flex-direction: ${display.column};
    align-items: ${display.center};
    height: 100vh;
    width: 70%;
`
export const StyledDataTableContent = styled.div`
    flex: 1;
    width: 100%;
    ${({ width }) => width < 950 && 'margin-bottom:100px'}
`
export const StyledButtonAndTitle = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`
export const StyledGlobalContent = styled.div`
    display: flex;
    justify-content: center;
`
