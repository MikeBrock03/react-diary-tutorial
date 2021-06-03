import {
  IonApp, IonLoading, IonRouterOutlet,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import {IonReactRouter} from '@ionic/react-router';
import {AuthContext, useAuthInit} from './auth';
import {auth} from './firebase';

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }
console.log('rendering App with auth: ', auth);

  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
      <IonReactRouter>
          <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/my">
            <AppTabs/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
          <Redirect exact from="/" to="/login"/>
        </Switch>
      </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
