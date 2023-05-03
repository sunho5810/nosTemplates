let initState = {
  configList: {},
  loading: false,
}

function configReducer(state = initState, action){
  let {type, payload} = action;

  switch (type) {
    case "":
      return{
        ...state,
        configList: payload.data
      }
  
    default:
      return{...state}
  }
}

export default configReducer;