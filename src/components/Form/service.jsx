import * as yup from 'yup'

const string_strIsRequired = `is required`

export const schema = yup.object().shape({
    states: yup
        .object()
        .shape({
            label: yup.string().required(`State ${string_strIsRequired}`),
            value: yup.string().required(`State ${string_strIsRequired}`),
        })
        .nullable() // for handling null value when clearing options via clicking "x"
        .required('states is required (from outter null check)'),
    department: yup
        .object()
        .shape({
            label: yup.string().required(`Department ${string_strIsRequired}`),
            value: yup.string().required(`Department ${string_strIsRequired}`),
        })
        .nullable() // for handling null value when clearing options via clicking "x"
        .required('Department is required (from outter null check)'),
    firstName: yup.string().required(`First Name ${string_strIsRequired}`),
    lastName: yup.string().required(`Last name ${string_strIsRequired}`),
    dateOfBirth: yup.string().required(`Date of birth ${string_strIsRequired}`),
    startDate: yup.string().required(`Start date ${string_strIsRequired}`),
    street: yup.string().required(`Street ${string_strIsRequired}`),
    city: yup.string().required(`City ${string_strIsRequired}`),
    zipCode: yup
        .string()
        .required(`A positive Integer ${string_strIsRequired}`)
        .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be 5 or 9 digits'),
})
