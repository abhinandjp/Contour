import * as Yup from 'yup'

export const ContractorSignupSchema = Yup.object({
    name : Yup.string().min(2).max(30).required('Please Enter Your Name'),
    email : Yup.string().email().required('Please Enter Your Email'),
    // phone : Yup.number().required("Please Enter Phone Number").positive().integer(),
    password : Yup.string().required('Please Enter Your Password'),
    confirmPassword : Yup.string().required().oneOf([Yup.ref('password'),null],"Password and Confirm password doesn't Match")
})