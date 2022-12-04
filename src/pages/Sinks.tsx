import React, { FC } from 'react';
import { MainContentStyle } from 'src/assets/styles/components/MainContent/MainContent.style';
import CardList from 'src/components/CardList/CardList';
import Button from 'src/components/elements/Button/Button';
import fetchCardsData from 'src/store/async-actions/fetchCardsData';
import { useAppDispatch } from 'src/store/hooks';

type TCategoryType = {
    id?: number,
    name?: string,
}

type TCardType = {
    isVisible: boolean,
    paramsId?: any
}

const Sinks: FC<TCardType> = ({ isVisible, paramsId }) => {
    const dispatch: Function = useAppDispatch();

    const makeFetchRequest = (): void => {
        dispatch((fetchCardsData(paramsId?.toString())));
    };
    return (
        <MainContentStyle isVisible={isVisible}>
            <CardList />
            <Button onClick={makeFetchRequest} type='button' variant='secondary'>Load More</Button>
        </MainContentStyle>
    );
};

export default Sinks;