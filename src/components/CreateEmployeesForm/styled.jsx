import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export const StyledContentForm = styled.div`
    min-width: ${({ width }) => (width < 950 ? '35%' : 'inherit')};
    ${({ width }) => width > 950 && 'width:600px; margin: 0 auto'};
`
export const StyledInputsGlobalContent = styled.div`
    ${({ width }) =>
        width > 950 && 'display: flex; justify-content: space-around'};
`
export const StyledInputsContent = styled.div`
    ${({ width }) => width > 950 && 'width:45%'};
`
