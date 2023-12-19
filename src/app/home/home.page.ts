import {Component, OnInit} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText} from '@ionic/angular/standalone';
import {Storage} from "@ionic/storage-angular";
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonText],
})
export class HomePage implements OnInit {
  count = 0;

  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    console.log(`Storage driver: ${this.storage.driver}`);
  }

  async onClickCountUp() {
    await this.storage.set('count', ++this.count);
    const value = await this.storage.get('count');
    console.log(`Stored value: ${value}`);
  }
}
