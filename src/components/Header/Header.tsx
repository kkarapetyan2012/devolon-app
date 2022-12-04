import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from 'src/assets/styles/components/Header/Header.style';
import Button from 'src/components/elements/Button/Button';
import { IconBurger } from 'src/components/elements/Icons/Icons';
import Typography from 'src/components/elements/Typography/Typography';

type HeaderType = {
    isVisible?: boolean,
    setIsVisible: Function,
}

const Header: FC<HeaderType> = ({isVisible, setIsVisible}) => {
    return (
        <HeaderStyle>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center h-100'>
                    <Link to="">
                        <Typography title='React Typescript App' typography='h2' />
                    </Link>
                    
                    <Button onClick={() => setIsVisible(!isVisible)} className='lg-button' type='button' variant='secondary'>
                        <IconBurger />
                    </Button>
                </div>
                
            </div>
        </HeaderStyle>
    );
};

export default Header;