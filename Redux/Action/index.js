import * as Types from "../Action/action-list";
export function total_tdo(num) {
  return {
    type: Types.TOTAL_TDO,
    payload: num,
  };
}
export function total_taluka(num) {
  return {
    type: Types.TOTAL_TALUKA,
    payload: num,
  };
}
export function total_town(num) {
  return {
    type: Types.TOTAL_TOWN,
    payload: num,
  };
}
export function total_project(num) {
  return {
    type: Types.TOTAL_PROJECT,
    payload: num,
  };
}
