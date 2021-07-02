import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Character from './Character/Character';
import CharacterDetail from './Character/CharacterDetail/CharacterDetail';

const AppRoute: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters/:house" component={Character} />
            <Route path="/character/:slug" component={CharacterDetail} />
        </Switch>
    );
};
export default AppRoute
