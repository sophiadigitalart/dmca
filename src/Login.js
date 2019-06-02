import React, { Component } from "react";
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonRow, IonCol, IonMenuButton } from '@ionic/react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      errorMessage: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.setState({
      loading: true
    });

    /* 
      Requete d'authentification

      const auth = await axios.post(`https://...`, {
        password: this.state.password,
        email: this.state.email
      });

      localStorage.setItem("user", JSON.stringify(auth.data.user));
      localStorage.setItem("token", auth.data.token);
      localStorage.setItem("apiKey", auth.data.apiKey);
    */
    localStorage.setItem("dmcatoken", "dmca");
    await this.setState({
      loading: false
    });

    this.props.history.push("/");
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <form noValidate>
            <IonList no-lines>
              <IonItem>
                <IonLabel color="primary">Utilisateur:</IonLabel>
                <IonInput
                  onIonChange={this.handleChange}
                  name="email"
                  type="text"
                  autocapitalize="off"
                  value={this.state.email}
                  required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel color="primary">Mot de passe:</IonLabel>
                <IonInput onIonChange={this.handleChange} name="password" type="password" required></IonInput>
              </IonItem>
            </IonList>

            <IonRow responsive-sm>
              <IonCol>
                <IonButton onClick={this.handleSubmit} >
                  Connexion
                </IonButton>
              </IonCol>
              
            </IonRow>
          </form>
        </IonContent>
      </>
    );
  }
}

export default Login;
