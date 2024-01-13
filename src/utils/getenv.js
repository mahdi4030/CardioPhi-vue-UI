import * as _ from "lodash";

export const getenv = (key = "") => {
  return _.get(process.env, `REACT_APP_${key}`, undefined);
};
