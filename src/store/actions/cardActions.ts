import { IactualData, cardActionTypes } from '../../Types/cardTypes';

export const ACTION_FETCH_CARDS = 'ACTION_FETCH_CARDS';

export const fetchCards = (data: IactualData[]): cardActionTypes => {
  return {
    type: ACTION_FETCH_CARDS,
    payload: data
  };
};
