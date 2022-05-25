import { Link } from 'react-router-dom'
//*components
import Title from '../../components/Title/index'
import CreateEmployeesForm from '../../components/Form'
import Modal from '../../components/Modal'
//*styled
import { StyledContainer, StyledSecondariesTitle } from './Styled'

export default function CreateEmployee() {
    const submit = (values) => {
        console.log(values)
    }
    return (
        <div>
            <main>
                <Title />
                <StyledContainer>
                    <Link to="employee-list">View Current Employees</Link>
                    <StyledSecondariesTitle>
                        Create Employee
                    </StyledSecondariesTitle>
                    <CreateEmployeesForm onSubmit={submit} />
                </StyledContainer>
                <Modal id="confirmation" />
            </main>
        </div>
    )
}
