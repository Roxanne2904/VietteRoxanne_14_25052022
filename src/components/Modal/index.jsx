import styled from 'styled-components'

const StyledModal = styled.div`
    display: none;
`

export default function Modal({ id }) {
    return (
        <StyledModal id={`${id}`} className="modal">
            Employee Created!
        </StyledModal>
    )
}
