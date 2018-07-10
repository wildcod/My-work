const initialState = {
    counter : 0,
    storedResult : []
}

const rootReducer = (state = initialState,action) => {
    if(action.type === "INC_COUNTER"){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === "Add_Five"){
        return {
            ...state,
            counter : state.counter + action.val
        }
    }
    if(action.type === "STORED_RESULT"){
        return {
            ...state,
            storedResult : state.storedResult.concat({id : new Date,val: state.counter})
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

export default rootReducer;