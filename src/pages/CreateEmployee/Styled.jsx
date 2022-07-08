import styled from 'styled-components'
//*Utils
import {
    numbers,
    DISPLAY_FLEX,
    FLEX_DIRECTION_COLUMN,
    ALIGN_ITEMS_CENTER,
    JUSTIFY_CONTENT_CENTER,
} from '../../utils/css/index'

export const StyledContainer = styled.div`
    ${DISPLAY_FLEX}
    ${FLEX_DIRECTION_COLUMN}
    ${ALIGN_ITEMS_CENTER}
    ${JUSTIFY_CONTENT_CENTER}
    margin-bottom: ${numbers.hundred}px;
`
