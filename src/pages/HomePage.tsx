import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import { firestore } from '../firebase';
import {Entry, toEntry} from '../models';
import { add as addIcon } from 'ionicons/icons';
import { formatDate } from '../date';


const HomePage: React.FC = () => {
  const { userId } = useAuth();
  const [entries, setEntries]=useState<Entry[]>([]);
  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('entries');
    return entriesRef.orderBy('date', 'desc').limit(7)
    .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId]);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Punch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonTitle size="large">The best clocking in system, ever. Made for schools.</IonTitle>
      <IonButton expand="block" onClick={()=>window.location.href = "https://buy.stripe.com/aEU2bP3RD3ue7WE7su"}>Make an account</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
