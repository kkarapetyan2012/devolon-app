import { Dispatch } from 'redux';

import { cardActionTypes, IactualData } from '../../Types/cardTypes';
import { fetchCards } from '../actions/cardActions';

const apiKey = '8df551cd-f3e4-4f5d-947a-5c7e82d333ca'

const fetchCardsData = (params1: any) => {

    const pageCount = Math.floor(Math.random() * 10);

    return async function (dispatch: Dispatch<cardActionTypes>) {

        // https://api.thecatapi.com/images/search?category_ids={{selected_category.id}}

        try {
            
            // const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1&page=${pageCount}`);

            const response = await fetch(`https://api.thecatapi.com/v1/search?api_key=${apiKey}&limit=10&category_ids=${params1}&page=${pageCount}`,
            {
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": "8df551cd-f3e4-4f5d-947a-5c7e82d333ca"
                }
              }
            );

            const data = await response.json();

            const actualData: IactualData[] = [];

            data?.forEach((item: any) => {

                actualData.push(
                    {
                        id: `${Math.random() + item.id}`,
                        image: item.image.url,
                    }
                );
            });

            dispatch(fetchCards(actualData));

        } catch (error: any) {
            console.error(error.message);
        } 
    };
};

export default fetchCardsData;

