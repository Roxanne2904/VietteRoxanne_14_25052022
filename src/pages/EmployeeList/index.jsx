import 'ag-grid-community/dist/styles/ag-grid.css' //!core grid CSS, always needed
//!The first ag-grid.css is always needed. It's the core structural CSS needed by the grid.
//!Without this, the Grid will not work.
import 'ag-grid-community/dist/styles/ag-theme-alpine.css' //!optional theme CSS
import DataTable from '../../components/DataTable.jsx'
//*styled
import { StyledMainEmployeeListPage } from './styled'

export default function EmployeeLists() {
    return (
        <StyledMainEmployeeListPage>
            <DataTable />
        </StyledMainEmployeeListPage>
    )
}
