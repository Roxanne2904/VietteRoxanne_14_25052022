import styled from 'styled-components'
import { colors } from '../../utils/css'
const StyledSubmitButton = styled.button`
    align-self: center;
    margin: 20px 0 50px 0;
    border: none;
    background: ${colors.colorPrimary};
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

export default function Button({ type, text }) {
    return <StyledSubmitButton type={`${type}`}>{`${text}`}</StyledSubmitButton>
}
