export function categoryResults(state = [], action) {
    switch(action.type) {
        case 'UPDATE_STATE':
            return action.payload;
        default:
            return state;
    }
}

export function categorySelectResults(state = [], action) {
    switch(action.type) {
        case 'UPDATE_STATE_SELECT':
            return action.payload;
        default:
            return state;
    }
}