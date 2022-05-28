import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee/index.jsx'
import EmployeeList from './pages/EmployeeList/index.jsx'
import { createGlobalStyle } from 'styled-components'
//*utils
import { colors } from './utils/css/index.jsx'

export const StyledGobal = createGlobalStyle`
*{
  font-family: 'robotoregular';
}

body{
  margin: 0;
  padding:0;
  display:flex;
  flex-direction: column;
  min-height: 100vh;
}
main{
  flex:1;
}

label {
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 10px;
  color: ${colors.colorPrimary};
}

`
export default function App() {
    return (
        <BrowserRouter>
            <StyledGobal />
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                {/* <Route path="/profile" element={<User />} />
        <Route path="*" element={<Error />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
