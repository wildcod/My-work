const initialState = {
    counter : 0
}

const Counter = (state = initialState,action) => {
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
    return state;
}

export default Counter