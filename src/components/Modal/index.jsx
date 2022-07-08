import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
//*component
import Button from '../Button'
//*font Awesome
import { faXmark } from '@fortawesome/free-solid-svg-icons'
//*selectors-Redux
import { selectToggleModal } from '../../utils/selectors'
//*actions-Redux
import { actionsToggleModal } from '../CreateEmployeesForm/toggleModalReducer'
import { actionsEmployees } from '../CreateEmployeesForm/employeesReducer'
//*styled
import {
    StyledTxtModal,
    StyledModalContent,
    StyledModal,
    StyledButtonsContent,
} from './styled'

/**
 * This component returns a modal.
 * @returns { HTMLElements } It return a React Component.
 */
export default function Modal({ id, message, width }) {
    const dispatch = useDispatch()
    const toggleModal = useSelector(selectToggleModal)
    console.log(message)
    return (
        toggleModal === 'open' && (
            <StyledModal>
                <StyledTxtModal
                    id={`${id}`}
                    toggleModal={toggleModal}
                    width={width}
                >
                    {message}
                    {id === 'warning' ? (
                        <StyledButtonsContent>
                            <Button
                                type={'basic'}
                                text="yes"
                                action={() => {
                                    dispatch(
                                        actionsEmployees.resetInitialState()
                                    )
                                    dispatch(actionsToggleModal.toggleModal())
                                }}
                            />
                            <Button
                                type={'basic'}
                                text="no "
                                action={() =>
                                    dispatch(actionsToggleModal.toggleModal())
                                }
                            />
                        </StyledButtonsContent>
                    ) : (
                        <Button
                            type={'icon'}
                            text=""
                            icon={faXmark}
                            action={() =>
                                dispatch(actionsToggleModal.toggleModal())
                            }
                        />
                    )}
                </StyledTxtModal>
                <StyledModalContent></StyledModalContent>
            </StyledModal>
        )
    )
}

Modal.propTypes = {
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
}

Modal.defaultProps = {
    width: window.innerWidth,
}
