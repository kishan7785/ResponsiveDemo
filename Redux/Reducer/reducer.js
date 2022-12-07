import {
  TOTAL_TDO,
  TOTAL_TALUKA,
  TOTAL_TOWN,
  TOTAL_PROJECT,
} from "../Action/action-list";
const initialstate = {
  T_tdo: 0,
  T_taluka: 0,
  T_town: 0,
  T_project: 0,
};
const mainReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOTAL_TDO: {
      return {
        T_tdo: action.payload,
      };
    }
    case TOTAL_TALUKA: {
      return {
        T_taluka: action.payload,
      };
    }
    case TOTAL_TOWN: {
      return {
        T_town: action.payload,
      };
    }
    case TOTAL_PROJECT: {
      return {
        T_project: action.payload,
      };
    }
    default:
      return state;
  }
};
export default mainReducer;
