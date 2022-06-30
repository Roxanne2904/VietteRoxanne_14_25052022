import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//*components
import Input from '../Input'
import Fieldset from '../Fieldset/index'
import Button from '../Button'
//*styled
import { StyledForm, StyledContentForm } from './styled'
//*service
import { schema } from './shemaYUP'
//*selectors
import { selectEmployees } from '../../utils/selectors'
//*actions
import { actionsToggleModal } from './toggleModalReducer'
import { actionsEmployees } from './employeesReducer'
//*utils
import { department } from '../../utils/selectDatas/department'

export default function CreateEmployeesForm() {
    // let myRef = useRef(null)
    //*Store with Redux and react-redux
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployees)

    console.log(employees)

    //* react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        dispatch(actionsEmployees.addAnEmployee(data))
        dispatch(actionsToggleModal.toggleModal())
    }

    const dateOfBirthRef = useRef(null)
    const startDateRef = useRef(null)

    return (
        <StyledContentForm>
            <StyledForm
                action="#"
                id="create-employee"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    name="firstName"
                    type="text"
                    label="First Name"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="lastName"
                    type="text"
                    label="Last Name"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="dateOfBirth"
                    type="text"
                    label="Date of Birth"
                    register={register}
                    errors={errors}
                    control={control}
                    myRef={dateOfBirthRef}
                />
                <Input
                    name="startDate"
                    type="text"
                    label="Start Date"
                    register={register}
                    errors={errors}
                    control={control}
                    myRef={startDateRef}
                />
                <Fieldset
                    legend="Address"
                    register={register}
                    errors={errors}
                    control={control}
                />
                <Input
                    name="department"
                    type="select"
                    label="Department"
                    register={register}
                    errors={errors}
                    control={control}
                    options={department}
                />
                <Button type="submit" text="Save" />
            </StyledForm>
        </StyledContentForm>
    )
}
