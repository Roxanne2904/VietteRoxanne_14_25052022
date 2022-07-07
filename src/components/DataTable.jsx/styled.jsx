import styled from 'styled-components'
//*Utils
import { colors, display, numbers, radius } from '../../utils/css'

export const StyledFeatureContent = styled.div`
    display: ${display.flex};
    justify-content: ${display.spaceBetween};
    padding: ${numbers.ten}px ${numbers.zero} ${numbers.twenty}px
        ${numbers.zero};
    ${({ width }) => width < 950 && 'flex-direction:column;'}
`
export const StyledDeleteQuestionContent = styled.div`
    display: flex;
    justify-content: ${display.spaceBetween};
    ${({ width }) => width < 950 && 'margin-bottom:5px;'}
`
export const StyledQuestion = styled.div`
    display: ${display.block};
    margin-right: ${numbers.ten}px;
    color: ${colors.colorPrimary};
    ${({ width }) => width < 500 && 'font-size:0.85rem'}
`
export const StyledButtonsContent = styled.div`
    display: ${display.flex};
`
export const StyledPageSizeContent = styled.div`
    display: ${display.flex};
`
export const StyledPageSizeText = styled.span`
    margin-right: ${numbers.ten}px;
    color: ${colors.colorPrimary};
    font-weight: bold;
    padding-top: 3px;
`
export const StyledBackgroundPageSizeSelect = styled.div`
    border: 2px solid ${colors.grey};
    border-radius: ${radius.main};
`
export const StyledPageSizeSelect = styled.select`
    border: transparent;
    color: ${colors.colorPrimary};
    font-weight: bold;
    padding: 3px;
`
