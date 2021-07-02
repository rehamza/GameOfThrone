import React from 'react';
import Header from './Header/Header';
import AppRoute from './AppRoute';
import { BrowserRouter } from 'react-router-dom';


const Layout: React.FC = () => {

    return (
        <>
            <Header />
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </>
    );
};
export default Layout
