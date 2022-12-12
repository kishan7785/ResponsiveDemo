import {
  TOTALTDO,
  TOTALTALUKA,
  TOTALTOWN,
  TOTALPROJECT,
  TDOARR,
  TALUKAARRDATA,
  TOWNARRDATA,
  PROJECTARRDATA,
  SELECTEDITEM,
} from "../Action/action-list";
const initialstate = {
  TotalTdoCount: 0,
  TotalTalukaCount: 0,
  TotalTownCount: 0,
  TotalProjectCount: 0,
  TdoArrData: [],
  TalukaArrData: [],
  TownArrData: [],
  ProjectArrData: [],
  Items: [],
};
const mainReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOTALTDO: {
      // console.log("TOTAL_TDO in Reducer", action.payload);
      return {
        ...state,
        TotalTdoCount: action.payload,
      };
    }
    case TOTALTALUKA: {
      // console.log("TOTAL_TALUKA in Reducer", action.payload);
      return {
        ...state,
        TotalTalukaCount: action.payload,
      };
    }
    case TOTALTOWN: {
      // console.log("TOTAL_TOWN in Reducer", action.payload);
      return {
        ...state,
        TotalTownCount: action.payload,
      };
    }
    case TOTALPROJECT: {
      // console.log("TOTAL_PROJECT in Reducer", action.payload);
      return {
        ...state,
        TotalProjectCount: action.payload,
      };
    }
    case TDOARR: {
      return {
        ...state,
        TdoArrData: action.payload,
      };
    }
    case TALUKAARRDATA: {
      return {
        ...state,
        TalukaArrData: action.payload,
      };
    }
    case TOWNARRDATA: {
      return {
        ...state,
        TownArrData: action.payload,
      };
    }
    case PROJECTARRDATA: {
      return {
        ...state,
        ProjectArrData: action.payload,
      };
    }
    case SELECTEDITEM: {
      return {
        ...state,
        Items: action.payload,
      };
    }
    default:
      return state;
  }
};
export default mainReducer;
