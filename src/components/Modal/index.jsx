import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
//*component
import Button from '../Button'
//*font Awesome
import { faXmark } from '@fortawesome/free-solid-svg-icons'
//*selectors
import { selectToggleModal } from '../../utils/selectors'
//*actions
import { actionsToggleModal } from '../CreateEmployeesForm/toggleModalReducer'
//*styled
import { StyledTxtModal, StyledModalContent, StyledModal } from './styled'

export default function Modal({ id, message }) {
    const dispatch = useDispatch()
    const toggleModal = useSelector(selectToggleModal)

    return (
        toggleModal === 'open' && (
            <StyledModal>
                <StyledTxtModal id={`${id}`} toggleModal={toggleModal}>
                    {message}
                    <Button
                        type={'close'}
                        text=""
                        icon={faXmark}
                        action={() =>
                            dispatch(actionsToggleModal.toggleModal())
                        }
                    />
                </StyledTxtModal>
                <StyledModalContent></StyledModalContent>
            </StyledModal>
        )
    )
}
