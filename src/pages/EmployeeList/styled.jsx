import styled from 'styled-components'
//*CSS
import {
    numbers,
    DISPLAY_FLEX,
    ALIGN_ITEMS_CENTER,
    FLEX_DIRECTION_COLUMN,
    JUSTIFY_CONTENT_SPACE_BETWEEN,
    JUSTIFY_CONTENT_CENTER,
} from '../../utils/css/index'

export const StyledEmployeeListPageContent = styled.div`
    ${DISPLAY_FLEX}
    ${FLEX_DIRECTION_COLUMN}
    ${ALIGN_ITEMS_CENTER}
    height: ${numbers.hundred}vh;
    width: 70%;
`
export const StyledDataTableContent = styled.div`
    flex: ${numbers.one};
    width: ${numbers.hundred}%;
    ${({ width }) => width < 950 && `margin-bottom:${numbers.hundred}px`}
`
export const StyledButtonAndTitle = styled.div`
    ${DISPLAY_FLEX}
    flex-direction: row-reverse;
    width: ${numbers.hundred}%;
    ${JUSTIFY_CONTENT_SPACE_BETWEEN}
    ${ALIGN_ITEMS_CENTER}
`
export const StyledGlobalContent = styled.div`
    ${DISPLAY_FLEX}
    ${JUSTIFY_CONTENT_CENTER}
`
export const StyledEmployeeListMain = styled.main`
    ${({ heigth }) => heigth <= 700 && `margin-bottom:${numbers.hundred}px;`}
`
