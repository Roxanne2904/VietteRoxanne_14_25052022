import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
//*components
import Header from '../../components/Header'
import CreateEmployeesForm from '../../components/CreateEmployeesForm'
import Modal from '../../components/Modal'
import Title from '../../components/Title'
//*styled
import { StyledContainer } from './Styled'
//*select
import { selectEmployees } from '../../utils/selectors'
// //*actions
// import { actionsEmployees } from '../../components/CreateEmployeesForm/employeesReducer'

//*font-awesome
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export default function CreateEmployee() {
    //*UseState()
    const [width, setWidth] = useState(window.innerWidth)
    //*Redux
    const employees = useSelector(selectEmployees)
    const { message } = employees

    //*Use Effect
    useEffect(() => {
        //*Resize
        const updateDimensions = () => {
            const currentWidth = window.innerWidth
            setWidth(currentWidth)
        }
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [width])

    return (
        <div>
            <main>
                <Header
                    linkTxt={
                        width > 950 ? 'View Current Employees' : 'Employees'
                    }
                    linkTo="/employee-list"
                    icon={faUsers}
                    width={width}
                />
                <StyledContainer>
                    <Title text="Create Employee" type="h2" />
                    <CreateEmployeesForm currentWidth={width} />
                </StyledContainer>
                <Modal
                    id="confirmation"
                    message={message !== null && message}
                    width={width}
                />
            </main>
        </div>
    )
}
