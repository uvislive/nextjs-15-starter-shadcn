import * as Yup from 'yup'
import { PASSWORD_FULL_VALIDATE, PASSWORD_VALIDATE, REQUIRED } from '../validationField'
import { passiveEventSupported } from '@tanstack/react-table'


export const LOGIN_SCHEMA= Yup.object().shape({
    username:REQUIRED,
    password:PASSWORD_FULL_VALIDATE
})