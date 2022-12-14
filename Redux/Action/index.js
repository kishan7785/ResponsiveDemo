import * as Types from "../Action/action-list";
import { Temp_Data } from "../../constants/temp-Data";

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
export const sortDataforProjects = (selectedItem) => {
  return async (dispatch, getState) => {
    let data = [];
    selectedItem.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          const { Town_Name = "" } = j || {};
          j.Town_Projects.forEach((h) => {
            const {
              Project_Due_Date = "",
              Project_Name = "",
              Project_Status_Value = "",
            } = h || {};
            const combine = Town_Name + ", " + Taluka_Name;
            const temp_object = {
              profile: Project_Status_Value,
              title: Project_Name,
              lable_one: combine,
              lable_two: Project_Due_Date,

              key: "Project-screen",
            };
            data.push(temp_object);
          });
        });
      });
    });

    await Promise.all(data).then((response) => {
      dispatch(projectArrData(response));
      dispatch(total_project(data.length));
    });
  };
};
export const sortDataforTown = (selectedItem) => {
  return async (dispatch, getState) => {
    let data = [];

    selectedItem?.forEach((item, index) => {
      item?.Tdo_Taluka.forEach((x, i) => {
        const { Taluka_Name = "" } = x || {};

        x?.Taluka_Town.forEach((j, inx) => {
          let counter = 0;
          counter = counter + j.Town_Projects.length;
          const { Town_Name = "" } = j || {};

          const Initial = Town_Name.split(" ");
          if (Initial.length > 1) {
            var Temp =
              Initial[0].charAt(0).toUpperCase() +
              Initial[1].charAt(0).toUpperCase();
          } else {
            var Temp =
              Initial[0].charAt(0).toUpperCase() +
              Initial[0].charAt(Initial[0].length / 2).toUpperCase();
          }
          const temp_object = {
            profile: Temp,
            title: Town_Name,
            lable_one: Taluka_Name,
            count: counter,
            key: "Town-screen",
          };
          // console.log("temp_object", temp_object);
          data.push(temp_object);
        });

        // console.log("counter:", counter);
      });
    });

    await Promise.all(data).then((response) => {
      dispatch(townArrData(response));
      dispatch(total_town(data.length));
    });
  };
};
export const sortDataforTaluka = (selectedItem) => {
  return async (dispatch, getState) => {
    let data = [];
    selectedItem.forEach((item, index) => {
      const { Tdo_Name = "", Tdo_Image = "" } = item || {};

      item?.Tdo_Taluka.forEach((x, i) => {
        let towncounter = 0;
        let counter = 0;
        const { Taluka_Name = "", Taluka_Town = [] } = x || {};
        // console.log("TalukaTown:", Taluka_Name);
        towncounter = towncounter + x.Taluka_Town.length;

        x?.Taluka_Town.forEach((j, inx) => {
          counter = counter + j.Town_Projects.length;
        });

        // console.log("counter:", counter);
        const Initial = Taluka_Name.split(" ");
        if (Initial.length > 1) {
          var Temp =
            Initial[0].charAt(0).toUpperCase() +
            Initial[1].charAt(0).toUpperCase();
        } else {
          var Temp =
            Initial[0].charAt(0).toUpperCase() +
            Initial[0].charAt(Initial[0].length / 2).toUpperCase();
        }
        const temp_object = {
          profile: Tdo_Image == null ? Temp : "",
          title: Taluka_Name,
          lable_one: towncounter,
          lable_two: Tdo_Name,
          count: counter,
          key: "Taluka-screen",
        };
        data.push(temp_object);
      });
    });
    await Promise.all(data).then((response) => {
      dispatch(talukaArrData(response));
      dispatch(total_taluka(data.length));
    });
  };
};
export const sortDataforTdo = (selectedItem) => {
  return async (dispatch, getState) => {
    dispatch(itemSelection(selectedItem));
    const newData = Temp_Data.filter((item) => {
      return item.Tdo_Name == selectedItem;
    });
    // Setting TDO DATA
    dispatch(sortDataforTaluka(newData));
    dispatch(sortDataforTown(newData));
    dispatch(sortDataforProjects(newData));

    const final_data = newData.map((item, index) => {
      let counter = 0;
      let talukaCounter = 0;
      let townCount = 0;
      const { Tdo_Name = "", Tdo_Image = "", Tdo_Taluka = [] } = item || {};
      talukaCounter = talukaCounter = item.Tdo_Taluka.length;
      Tdo_Taluka.forEach((x) => {
        townCount = townCount + x.Taluka_Town.length;
        x.Taluka_Town.forEach((j) => {
          counter = counter + j.Town_Projects.length;
        });
      });
      const Initial = Tdo_Name.split(" ");
      if (Initial.length > 1) {
        var Temp =
          Initial[0].charAt(0).toUpperCase() +
          Initial[1].charAt(0).toUpperCase();
      } else {
        var Temp =
          Initial[0].charAt(0).toUpperCase() +
          Initial[0].charAt(Initial[0].length / 2).toUpperCase();
      }
      // console.log("counter", counter, index);
      const temp_object = {
        profile: Tdo_Image == null ? Temp : "",
        title: Tdo_Name,
        lable_one: Tdo_Taluka[0]?.Taluka_Name ? Tdo_Taluka[0]?.Taluka_Name : "",
        lable_two: Tdo_Taluka[1]?.Taluka_Name ? Tdo_Taluka[1]?.Taluka_Name : "",
        count: counter,
        Key: "tdo-screen",
        talukaCounter: talukaCounter,
        townCount: townCount,
      };
      return temp_object;
    });

    await Promise.all(final_data).then((response) => {
      // console.log("response:", response);
      // console.log("response.length", response.length);
      dispatch(tdoArrData(response));
      dispatch(total_tdo(response.length));
      dispatch(total_taluka(response[0].talukaCounter));
      dispatch(total_town(response[0].townCount));
      dispatch(total_project(response[0].count));
    });
  };
};
