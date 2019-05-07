import * as Yup from 'yup'
import { PLATFORM, REGIONS, ROLES } from '../constants/constants'

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
  host: userFormValidationSchema,
  event: Yup.string()
    .required('Select a event'),
  dd_number: Yup.number().required('Fill the DD number'),
  tank_number: Yup.number().required('Fill the tank number'),
  heal_number: Yup.number().required('Fill the heal number')
})
