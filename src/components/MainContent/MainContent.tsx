import React, { FC } from 'react';
import { MainContentStyle } from 'src/assets/styles/components/MainContent/MainContent.style';
import Title from '../elements/Title/Title';

type TMainContentType = {
    isVisible: boolean
}

const MainContent: FC<TMainContentType> = ({ isVisible }) => {

    return (
        <MainContentStyle isVisible={isVisible}>
            <Title tag='h1' >Click to siidebar menu</Title>
        </MainContentStyle>
    );
};

export default MainContent;