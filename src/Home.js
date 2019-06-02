import React, { Component } from "react";
import { IonMenuButton, IonList, IonGrid, IonRow, IonHeader, IonContent, IonToolbar, IonButtons, IonTitle } from '@ionic/react';

class App extends Component {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="outer-content asset-list">

          <IonList>
            <IonGrid fixed>
              <IonRow align-items-stretch>
                
              </IonRow>
            </IonGrid>
          </IonList>
        </IonContent>
      </>
    );
  }
}

export default App;
