import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import 'ag-grid-community/dist/styles/ag-grid.css' //!core grid CSS, always needed
//!The first ag-grid.css is always needed. It's the core structural CSS needed by the grid.
//!Without this, the Grid will not work.
import 'ag-grid-community/dist/styles/ag-theme-alpine.css' //!optional theme CSS
import DataTable from '../../components/DataTable.jsx'
import Header from '../../components/Header/index.jsx'
//*styled
import {
    StyledEmployeeListPageContent,
    StyledDataTableContent,
    StyledButtonAndTitle,
    StyledGlobalContent,
    StyledEmployeeListMain,
} from './styled'
//*Components
import Title from '../../components/Title/index.jsx'
import Modal from '../../components/Modal/index.jsx'
//*font-awesome
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//*actions
import { actionsToggleModal } from '../../components/CreateEmployeesForm/toggleModalReducer'
import Button from '../../components/Button/index.jsx'

export default function EmployeeLists() {
    const dispatch = useDispatch()
    const [width, setWidth] = useState(window.innerWidth)
    const [heigth, setHeigth] = useState(window.innerHeight)
    //*Use Effect
    useEffect(() => {
        //*Resize
        const updateDimensions = () => {
            const currentWidth = window.innerWidth
            const currentHeight = window.innerHeight
            setWidth(currentWidth)
            setHeigth(currentHeight)
        }
        window.addEventListener('resize', updateDimensions)

        return () => window.removeEventListener('resize', updateDimensions)
    }, [width, heigth])

    return (
        <StyledEmployeeListMain heigth={heigth}>
            <Header
                linkTxt={width > 950 ? 'Create a new Employee' : 'new Employee'}
                linkTo="/"
                icon={faUserPlus}
                width={width}
            />
            <StyledGlobalContent>
                <StyledEmployeeListPageContent>
                    <StyledButtonAndTitle width={width}>
                        <Button
                            action={() =>
                                dispatch(actionsToggleModal.toggleModal())
                            }
                            type={width < 950 ? 'icon' : 'basic'}
                            text={width < 950 ? null : 'remove all employees'}
                            icon={width < 950 ? faTrash : null}
                            trash={true}
                        />
                        <div>
                            <Title
                                text={'Current Employees'}
                                type={'h2'}
                                width={width}
                            />
                        </div>
                    </StyledButtonAndTitle>
                    <StyledDataTableContent width={width}>
                        <DataTable width={width} />
                    </StyledDataTableContent>
                </StyledEmployeeListPageContent>
            </StyledGlobalContent>
            <Modal
                id="warning"
                message={'Are you sure you want to delete all your employees?'}
                width={width}
            />
        </StyledEmployeeListMain>
    )
}
