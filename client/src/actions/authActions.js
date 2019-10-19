import {SET_CURRENT_USER} from './types';
import {GET_ERRORS} from './types';
import axios from 'axios';

//register user
export const registerUser = (userData,history) => dispatch => {
    axios.post('/api/users/register', userData).then(res => history.push('/login'))
      .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
      }));
}