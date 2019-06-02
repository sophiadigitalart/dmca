import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import { IonApp, IonSplitPane, IonPage } from '@ionic/react';

import DisconnectedRoute from "./DisconnectedRoute";
import ConnectedRoute from "./ConnectedRoute";

const App = () => (
  <Router>
    <div id="app">
      <IonApp>
        <IonSplitPane contentId="main">
          <IonPage id="main">
            <Switch>
              <DisconnectedRoute path="/auth/login" component={Login} />
              <ConnectedRoute path="/" component={Home} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonApp>
    </div>
  </Router>
);

export default App;
