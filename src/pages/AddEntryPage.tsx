import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';

const AddEntryPage: React.FC = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle> Add entry </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Title</IonLabel>
            <IonInput value={title}
            onIonChange={(event) => setTitle(event.detail.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Desciption</IonLabel>
            <IonTextarea value={description}
            onIonChange={(event) => setDescription(event.detail.value)}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AddEntryPage;
