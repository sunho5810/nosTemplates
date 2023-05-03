function setConfigData (data){
  return (dispatch) => {
    console.log("data??", data);

    const configData = {};

    if(data == null){
      configData = {
        color: {
          main: "#F4A000",
        },
        fontColor: {
          main: "#F4A000",
        },
        bgColor: {
          main: "#F4A000",
        }
      }
    } else {
      configData = data;
    }

    dispatch({type: "SET_CONFIG_DATA", payload: {data: configData}});
  }
}

export const configAction = {setConfigData};