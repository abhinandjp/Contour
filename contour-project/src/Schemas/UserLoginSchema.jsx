import * as Yup from 'yup'

export const UserLoginSchema = Yup.object({    
    email : Yup.string().email().required('Please Enter Your Email'),   
    password : Yup.string().required('Please Enter Your Password'),   
})