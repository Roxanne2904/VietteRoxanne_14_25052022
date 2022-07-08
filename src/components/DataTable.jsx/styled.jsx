import styled from 'styled-components'
//*Utils
import {
    weight,
    colors,
    numbers,
    radius,
    DISPLAY_FLEX,
    DISPLAY_BLOCK,
    COLOR_PRIMARY,
    JUSTIFY_CONTENT_SPACE_BETWEEN,
    FLEX_DIRECTION_COLUMN,
} from '../../utils/css'

export const StyledFeatureContent = styled.div`
    ${DISPLAY_FLEX}
    ${JUSTIFY_CONTENT_SPACE_BETWEEN}
    padding: ${numbers.ten}px ${numbers.zero} ${numbers.twenty}px
        ${numbers.zero};
    ${({ width }) => width < 950 && `${FLEX_DIRECTION_COLUMN}`}
`
export const StyledDeleteQuestionContent = styled.div`
    ${DISPLAY_FLEX}
    ${JUSTIFY_CONTENT_SPACE_BETWEEN}
    ${({ width }) => width < 950 && 'margin-bottom:5px;'}
`
export const StyledQuestion = styled.div`
    ${DISPLAY_BLOCK}
    margin-right: ${numbers.ten}px;
    ${COLOR_PRIMARY}
    ${({ width }) => width < 500 && 'font-size:0.85rem'}
`
export const StyledButtonsContent = styled.div`
    ${DISPLAY_FLEX}
`
export const StyledPageSizeContent = styled.div`
    ${DISPLAY_FLEX}
`
export const StyledPageSizeText = styled.span`
    margin-right: ${numbers.ten}px;
    ${COLOR_PRIMARY}
    font-weight: ${weight.bold};
    padding-top: 3px;
`
export const StyledBackgroundPageSizeSelect = styled.div`
    border: 2px solid ${colors.grey};
    border-radius: ${radius.main};
`
export const StyledPageSizeSelect = styled.select`
    border: transparent;
    ${COLOR_PRIMARY}
    font-weight: ${weight.bold};
    padding: 3px;
`
