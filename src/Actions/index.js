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