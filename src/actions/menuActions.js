import axios from 'axios';
import { FETCH_MENU_ITEMS, FETCH_ERROR } from '../actions/types';

export const fetchMenuItems = () => async(dispatch) => {
  try {
    const fetchedData = await axios.get('https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json');
    dispatch({
      type: FETCH_MENU_ITEMS,
      payload: fetchedData.data,
    })
  } catch (err) {
    dispatch({
      type: FETCH_ERROR,
      payload: err,
    })
  }
};