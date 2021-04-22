import { createContext } from 'react';
import PropTypes from 'prop-types';
import useReducerWithThunk from 'use-reducer-thunk';

import { SET_ANNOUNCEMENTS, SET_ANNOUNCEMENT_DETAIL } from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  announcements: [],
  announcementDetail: {},
};

function reducer(state, action) {
  switch (action.type) {
    case SET_ANNOUNCEMENTS:
      return {
        ...state,
        announcements: action.payload,
      };
    case SET_ANNOUNCEMENT_DETAIL:
      return {
        ...state,
        announcementDetail: action.payload,
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    'dtd-reducer',
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object,
};
