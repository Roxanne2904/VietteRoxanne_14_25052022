import styled from 'styled-components'
//*Utils
import { colors } from '../../utils/css'

export const StyledFeatureContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 20px 0;
`
export const StyledDeleteQuestionContent = styled.div`
    display: flex;
    justify-content: space-between;
`
export const StyledQuestion = styled.div`
    display: block;
    margin-right: 10px;
    color: ${colors.colorPrimary};
`
export const StyledButtonsContent = styled.div`
    display: flex;
`
export const StyledPageSizeContent = styled.div`
    display: flex;
`
export const StyledPageSizeText = styled.span`
    margin-right: 10px;
    color: ${colors.colorPrimary};
    font-weight: bold;
    padding-top: 3px;
`
export const StyledBackgroundPageSizeSelect = styled.div`
    border: 2px solid ${colors.grey};
    border-radius: 3px;
`
export const StyledPageSizeSelect = styled.select`
    border: transparent;
    color: ${colors.colorPrimary};
    font-weight: bold;
    padding: 3px;
`
