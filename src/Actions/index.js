// export const updateState = (data) => ({
//     type: 'UPDATE_STATE',
//     payload: data
// })

export function updateState(category) {
    return async function(dispatch) {
        const response = await fetch(`https://swapi.co/api/${category}`);
        const result = await response.json()
        
        dispatch({
            type: 'UPDATE_STATE',
            payload: result.results
        })
    }
}

export function updateStateSelect(category) {
    return async function(dispatch) {
        const response = await fetch(category);
        const result = await response.json()
        
        dispatch({
            type: 'UPDATE_STATE_SELECT',
            payload: result
        })
    }
}