import dungeonsData from './data/events.json'

export const EVENTS_OPTIONS = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}))

export const ROLE_DD = 'DD'
export const ROLE_TANK = 'TANK'
export const ROLE_HEAL = 'HEAL'

export const ROLES = [ROLE_DD, ROLE_TANK, ROLE_HEAL]

export const ROLES_INPUT = ROLES.map(key => ({
  label: key,
  value: key
}))

export const USER_CP = 'USER_CP'
export const USER_LVL = 'USER_LVL'
export const USER_ROLE = 'USER_ROLE'
export const USER_PSEUDO = 'USER_PSEUDO'
export const USER_PLATFORM = 'USER_PLATFORM'
export const USER_REGION = 'USER_REGION'

export const USER_COOKIES = [USER_CP, USER_LVL, USER_ROLE, USER_PSEUDO, USER_PLATFORM, USER_REGION]

export const PLATFORM = ['PC', 'XBOX', 'PS4']
export const PLATFORM_INPUT = PLATFORM.map(key => ({
  label: key,
  value: key
}))

export const REGIONS = ['EU', 'NA']
export const REGIONS_INPUT = REGIONS.map(key => ({
  label: key,
  value: key
}))