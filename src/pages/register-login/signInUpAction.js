import { isPending, responseResolved } from './signInUpSlice'

const postUserAction = user => async dispatch => {
    dispatch(isPending)

    // call axio helper to call the api


}