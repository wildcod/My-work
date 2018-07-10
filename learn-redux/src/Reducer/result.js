const initialState = {
    storedResult : []
}




const Result = (state = initialState,action) => {
if(action.type === "STORED_RESULT"){
    return {
        ...state,
        storedResult : state.storedResult.concat({id : new Date,val: action.result})
    }
}
if(action.type === "DELETE_RESULT"){
    const updateResult = state.storedResult.filter(result => result.id !== action.resultId)
    return {
        ...state,
        storedResult : updateResult
    }
}
 return state;
}

export default Result