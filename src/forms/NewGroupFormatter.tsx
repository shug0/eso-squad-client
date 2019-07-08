import {
  ROLE_DD,
  ROLE_DD_NUM,
  ROLE_HEAL,
  ROLE_HEAL_NUM,
  ROLE_TANK,
  ROLE_TANK_NUM
} from "../constants/constants";
import FormGroup from "../constants/models/FormGroup";

export default (values: FormGroup) => {
  return {
    eventId: values.event,
    players_template: {
      [ROLE_DD]: values[ROLE_DD_NUM],
      [ROLE_HEAL]: values[ROLE_HEAL_NUM],
      [ROLE_TANK]: values[ROLE_TANK_NUM]
    },
    host: values.host,
    created: Date.now()
  };
};
