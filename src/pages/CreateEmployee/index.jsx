import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
//*components
import Header from '../../components/Header'
import CreateEmployeesForm from '../../components/CreateEmployeesForm'
import Modal from '../../components/Modal'
import Title from '../../components/Title'
//*styled
import { StyledContainer } from './Styled'
//*selectors-Redux
import { selectEmployees } from '../../utils/selectors'
//*font-awesome
import { faUsers } from '@fortawesome/free-solid-svg-icons'

/**
 * Returns employees creation page display.
 * @returns { HTMLElements } It return a React Component.
 */

export default function CreateEmployee() {
    const [width, setWidth] = useState(window.innerWidth) //*useState
    const employees = useSelector(selectEmployees) //*Redux
    const { message } = employees //*Redux
    useEffect(() => {
        const updateCurrentWidth = () => {
            const currentWidth = window.innerWidth
            setWidth(currentWidth)
        }
        window.addEventListener('resize', updateCurrentWidth)

        return () => window.removeEventListener('resize', updateCurrentWidth)
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
                    <Title text="Create Employee" type="h2" width={width} />
                    <CreateEmployeesForm currentWidth={width} />
                </StyledContainer>
                <Modal
                    id="confirmation"
                    message={message !== null && message !== false && message}
                    width={width}
                />
            </main>
        </div>
    )
}
