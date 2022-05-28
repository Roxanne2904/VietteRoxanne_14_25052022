import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//*components
import Title from '../../components/Title/index'
import CreateEmployeesForm from '../../components/CreateEmployeesForm'
import Modal from '../../components/Modal'
//*styled
import { StyledContainer, StyledSecondariesTitle } from './Styled'
//*select
import { selectEmployees } from '../../utils/selectors'
//*actions
import { actionsEmployees } from '../../components/CreateEmployeesForm/employeesReducer'
export default function CreateEmployee() {
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployees)
    const { message } = employees

    return (
        <div>
            <main>
                <Title />
                <StyledContainer>
                    <Link to="employee-list">View Current Employees</Link>
                    <button
                        onClick={() =>
                            dispatch(actionsEmployees.resetInitialState())
                        }
                    >
                        click to reset
                    </button>
                    <StyledSecondariesTitle>
                        Create Employee
                    </StyledSecondariesTitle>
                    <CreateEmployeesForm />
                </StyledContainer>
                <Modal
                    id="confirmation"
                    message={message !== null && message}
                />
            </main>
        </div>
    )
}
