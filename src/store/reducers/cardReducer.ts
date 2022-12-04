import { IcardState, cardActionTypes } from '../../Types/cardTypes';
import { ACTION_FETCH_CARDS } from '../actions/cardActions';

const initialState: IcardState = {
  cards: []
};

const cardReducer = (state = initialState, action: cardActionTypes): IcardState => {
  switch (action.type) {
    case ACTION_FETCH_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.payload]
      };
    default:
      return state;
  }
};

export default cardReducer;
