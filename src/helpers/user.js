import Cookies from 'js-cookie'
import {
  USER_CP,
  USER_LVL, USER_PLATFORM,
  USER_PSEUDO, USER_REGION,
  USER_ROLE,
  USER_ID
} from '../constants/constants'

const getUserID = (user) => Object.values(user).join('-')

export const getCookieUser = () => ({
  pseudo: Cookies.get(USER_PSEUDO),
  role: Cookies.get(USER_ROLE),
  lvl: Cookies.get(USER_LVL),
  cp: Cookies.get(USER_CP),
  platform: Cookies.get(USER_PLATFORM),
  region: Cookies.get(USER_REGION)
})

export const setCookieUser = user => {
  Cookies.set(USER_PSEUDO, user.pseudo)
  Cookies.set(USER_ROLE, user.role)
  Cookies.set(USER_LVL, user.lvl)
  Cookies.set(USER_CP, user.cp)
  Cookies.set(USER_PLATFORM, user.platform)
  Cookies.set(USER_REGION, user.region)
  Cookies.set(USER_ID, getUserID(user))
}
