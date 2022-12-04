import React from 'react';
import { CardListStyle } from 'src/assets/styles/components/CardList/CardList.style';
import { useAppSelector } from '../../store/hooks';
import { IactualData } from '../../Types/cardTypes';
import Card from '../Card/Card';

const CardList: React.FC = () => {
  const { cards } = useAppSelector(state => state.cardReducer);

  return (
    <CardListStyle className='img-list'>
      {cards.map((item: IactualData) => {
        return (
          <Card
            key={item.id}
            {...item}
          />
        );
      })
      }
    </CardListStyle>
  );
};

export default CardList;
