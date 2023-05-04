let initState = {
    themeData: {}
}

function themeReducer (state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "":
            return {
                ...state
            }
    
        default:
            return {...state}
    }
}