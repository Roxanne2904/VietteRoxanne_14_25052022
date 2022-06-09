import 'ag-grid-community/dist/styles/ag-grid.css' //!core grid CSS, always needed
//!The first ag-grid.css is always needed. It's the core structural CSS needed by the grid.
//!Without this, the Grid will not work.
import 'ag-grid-community/dist/styles/ag-theme-alpine.css' //!optional theme CSS
import DataTable from '../../components/DataTable.jsx'
//*styled
import {
    StyledMainEmployeeListPage,
    StyledDataTableContent,
    StyledMainTitleContent,
    StyledLink,
} from './styled'
//*Components
import Title from '../../components/Title/index.jsx'

export default function EmployeeLists() {
    return (
        <StyledMainEmployeeListPage>
            <StyledMainTitleContent>
                <Title text={'Current Employees'} />
                {/* <StyledMainTitle>Current Employees</StyledMainTitle> */}
                <StyledLink to={'/'}>- Create a new Employee -</StyledLink>
            </StyledMainTitleContent>
            <StyledDataTableContent>
                <DataTable />
            </StyledDataTableContent>
        </StyledMainEmployeeListPage>
    )
}
