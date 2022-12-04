import React, { FC } from 'react';
import BaseStyles from 'src/assets/styles/BaseStyles';
import { LayoutStyle } from 'src/assets/styles/components/Layout/Layout.style';
import GlobalStyles from 'src/assets/styles/GlobalStyles';
import ResetStyles from 'src/assets/styles/ResetStyles';
import Typography from 'src/assets/styles/Typography';

const Layout: FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <LayoutStyle>
            <ResetStyles />
            <GlobalStyles />
            <BaseStyles />
            <Typography />
            {children}
        </LayoutStyle>
    );
};

export default Layout;