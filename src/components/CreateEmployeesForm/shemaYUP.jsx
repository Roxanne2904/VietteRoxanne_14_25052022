import * as yup from 'yup'
import { myRegEx } from '../Inputs/reusableFunctions'

const string_strIsRequired = `is required`

export const schema = yup.object().shape({
    states: yup
        .object()
        .shape({
            label: yup.string().required(`State ${string_strIsRequired}`),
            value: yup.string().required(`State ${string_strIsRequired}`),
        })
        .nullable() // for handling null value when clearing options via clicking "x"
        .required('states is required'),
    department: yup
        .object()
        .shape({
            label: yup.string().required(`Department ${string_strIsRequired}`),
            value: yup.string().required(`Department ${string_strIsRequired}`),
        })
        .nullable() // for handling null value when clearing options via clicking "x"
        .required('Department is required '),
    firstName: yup.string().required(`First Name ${string_strIsRequired}`),
    lastName: yup.string().required(`Last name ${string_strIsRequired}`),
    dateOfBirth: yup
        .string()
        .required(`Date of birth ${string_strIsRequired}`)
        .matches(myRegEx, 'Must be DD/MM/YYYY or YYYY/MM/DD'),
    startDate: yup
        .string()
        .required(`Start date ${string_strIsRequired}`)
        .matches(myRegEx, 'Must be DD/MM/YYYY or YYYY/MM/DD'),
    street: yup.string().required(`Street ${string_strIsRequired}`),
    city: yup.string().required(`City ${string_strIsRequired}`),
    zipCode: yup
        .string()
        .required(`A positive Integer ${string_strIsRequired}`)
        .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be 5 or 9 digits'),
})
