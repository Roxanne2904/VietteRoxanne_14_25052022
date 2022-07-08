import styled from 'styled-components'
import { DISPLAY_FLEX, FLEX_DIRECTION_COLUMN } from '../../utils/css/index'

export const StyledForm = styled.form`
    ${DISPLAY_FLEX}
    ${FLEX_DIRECTION_COLUMN}
    padding: 15px;
`
export const StyledContentForm = styled.div`
    min-width: ${({ width }) => (width < 950 ? '35%' : 'inherit')};
    ${({ width }) => width > 950 && 'width:600px; margin: 0 auto'};
`
export const StyledInputsGlobalContent = styled.div`
    ${({ width }) =>
        width > 950 && `${DISPLAY_FLEX} justify-content: space-around`};
`
export const StyledInputsContent = styled.div`
    ${({ width }) => width > 950 && 'width:45%'};
`
