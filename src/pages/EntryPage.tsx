import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, {useState, useEffect } from 'react';
import { useParams } from "react-router";
import {firestore} from '../firebase';
import {Entry} from '../models';

interface RouteParams{
  id: string;
}

const EntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [entry, setEntry] = useState<Entry>();
  useEffect(()=>{
    const entryRef = firestore.collection('entries').doc(id);
    entryRef.get().then((doc)=> {
      const entry = { id: doc.id, ...doc.data() } as Entry;
      setEntry(entry);
    });
  }, [id]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle> {entry?.title} </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry?.description}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
