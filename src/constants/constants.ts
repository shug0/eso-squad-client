import dungeonsData from "./data/events.json";

export const EVENTS_OPTIONS = dungeonsData.map(dungeon => ({
  label: dungeon.name,
  value: dungeon.id
}));

export const ROLE_DD = "dd";
export const ROLE_TANK = "tank";
export const ROLE_HEAL = "heal";

export const ROLE_DD_NUM = "dd_number";
export const ROLE_TANK_NUM = "tank_number";
export const ROLE_HEAL_NUM = "heal_number";

export const ROLES = [ROLE_DD, ROLE_TANK, ROLE_HEAL];

export const ROLES_INPUT = ROLES.map(key => ({
  label: key,
  value: key
}));

export const USER_CP = "USER_CP";
export const USER_LVL = "USER_LVL";
export const USER_ROLE = "USER_ROLE";
export const USER_PSEUDO = "USER_PSEUDO";
export const USER_PLATFORM = "USER_PLATFORM";
export const USER_REGION = "USER_REGION";
export const USER_ID = "USER_ID";

export const PLATFORM = ["pc", "xbox", "ps4"];
export const PLATFORM_INPUT = PLATFORM.map(key => ({
  label: key,
  value: key
}));

export const REGIONS = ["eu", "na"];
export const REGIONS_INPUT = REGIONS.map(key => ({
  label: key,
  value: key
}));

export const GROUP_DUNGEON = "group_dungeon";
export const GROUP_TRIAL = "trial";

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
};
