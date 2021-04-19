import createDataContext from './createDataContext';
import Shamsipour from "../api/api";

const userReducer = (state, action) => {
  switch (action.type) {
      case 'fetch_users':
        return {
          ...state,
          UserCount: action.payload.length,
          Users: action.payload,
        };
    default:
      return state; 
  }  
};
 
const fetchUsers = dispatch => async() => {
    const response = await Shamsipour.get('/user/')
    dispatch({type:'fetch_users',payload:response.data}) 
};
export const { Provider, Context } = createDataContext(
    userReducer,
  { fetchUsers },
  []
);
