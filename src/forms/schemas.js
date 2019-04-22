import * as Yup from 'yup'
import {PLATFORM, REGIONS, ROLES} from '../constants/constants'

export const userFormValidationSchema = Yup.object().shape({
  pseudo: Yup.string()
    .required('Enter your ESO account name')
    .max(40, '🤔'),
  cp: Yup.number()
    .min(0)
    .max(2000),
  lvl: Yup.number()
    .required('Enter your character level')
    .min(1)
    .max(50),
  role: Yup.string()
    .oneOf(ROLES)
    .required('Choose a role please'),
  platform: Yup.string()
    .oneOf(PLATFORM)
    .required('Select your platform'),
  region: Yup.string()
    .oneOf(REGIONS)
    .required('Select your region')
})

export const newGroupFormValidationSchema = Yup.object().shape({
  host: Yup.string()
    .required()
    .max(40, '🤔'),
  platform: Yup.string()
    .oneOf(PLATFORM)
    .required('Select your platform'),
  region: Yup.string()
    .oneOf(REGIONS)
    .required('Select your region')
})
