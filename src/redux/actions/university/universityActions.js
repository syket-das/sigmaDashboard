
import axios from 'axios';
import { UNIVERSITY_LIST_FAIL, UNIVERSITY_LIST_REQUEST, UNIVERSITY_LIST_SUCCESS } from '../../constants/university/universityConstants';






const baseUrl = 'https://sigmalpu.herokuapp.com';


export const universityList = () => async (dispatch) => {
    try {
        dispatch({ type: UNIVERSITY_LIST_REQUEST });
    
        const { data } = await axios.get(`${baseUrl}/api/v2/university/all`);
    
        dispatch({
        type: UNIVERSITY_LIST_SUCCESS,
        payload: data,
        });
    } catch (error) {
        dispatch({
        type: UNIVERSITY_LIST_FAIL,
        payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}