import dungeonsData from './data/events.json'

export const EVENTS_OPTIONS = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}))

export const ROLE_DD = 'DD'
export const ROLE_TANK = 'TANK'
export const ROLE_HEAL = 'HEAL'

export const ROLE_DD_NUM = 'dd_number'
export const ROLE_TANK_NUM = 'tank_number'
export const ROLE_HEAL_NUM = 'heal_number'

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
export const USER_ID = 'USER_ID'

export const USER_COOKIES = [USER_CP, USER_LVL, USER_ROLE, USER_PSEUDO, USER_PLATFORM, USER_REGION, USER_ID]

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

export const GROUP_DUNGEON = 'group_dungeon'
export const GROUP_TRIAL = 'trial'

export const GROUP_TEMPLATE = {
  [GROUP_DUNGEON]: {
    [ROLE_DD_NUM]: 2,
    [ROLE_TANK_NUM]: 1,
    [ROLE_HEAL_NUM]: 1
  },
  [GROUP_TRIAL]: {
    [ROLE_DD_NUM]: 8,
    [ROLE_TANK_NUM]: 2,
    [ROLE_HEAL_NUM]: 2
  }
}
