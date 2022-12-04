import { ACTION_FETCH_CARDS } from "src/store/actions/cardActions";

export interface IactualData {
  id: string,
  image: string,
}

export interface IcardState {
  cards: IactualData[];
}

interface fetchCards {
  type: typeof ACTION_FETCH_CARDS;
  payload: IactualData[];
}

export type cardActionTypes = fetchCards
