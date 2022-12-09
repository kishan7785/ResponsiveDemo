import * as Types from "../Action/action-list";
export function total_tdo(num) {
  return {
    type: Types.TOTALTDO,
    payload: num,
  };
}
export function total_taluka(num) {
  return {
    type: Types.TOTALTALUKA,
    payload: num,
  };
}
export function total_town(num) {
  return {
    type: Types.TOTALTOWN,
    payload: num,
  };
}
export function total_project(num) {
  return {
    type: Types.TOTALPROJECT,
    payload: num,
  };
}
export function tdoArrData(num) {
  return {
    type: Types.TDOARR,
    payload: num,
  };
}
export function talukaArrData(num) {
  return {
    type: Types.TALUKAARRDATA,
    payload: num,
  };
}
export function townArrData(num) {
  return {
    type: Types.TOWNARRDATA,
    payload: num,
  };
}
export function projectArrData(num) {
  return {
    type: Types.PROJECTARRDATA,
    payload: num,
  };
}
export function itemSelection(item) {
  return {
    type: Types.SELECTEDITEM,
    payload: item,
  };
}
