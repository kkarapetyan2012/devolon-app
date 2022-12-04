import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarStyle } from 'src/assets/styles/components/Sidebar/Sidebar.style';
import Button from '../elements/Button/Button';

type TCategoryType = {
    name?: string,
    id?: number,
  }

const Sidebar: FC<{className?: string, categories: TCategoryType[]}> = ({ className, categories }) => {
    

    return (
        <SidebarStyle className={className}>
            <ul>
                {categories.map(category => 
                    <li key={category.id}>
                        <Button className='w-100' type='button' variant='secondary'>
                            <Link to={`${category.name}`}>
                                {category.name}
                            </Link>
                        </Button>
                        
                    </li>
                )}
            </ul>
        </SidebarStyle>
    );
};

export default Sidebar;