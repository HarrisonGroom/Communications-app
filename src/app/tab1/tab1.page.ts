import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  selectedData: any;

  constructor(
    public alertController: AlertController
  ) { }


  showAlert() {

    this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle for alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  showConfirm() {
    this.alertController.create({
      header: 'Confirm Alert',
      subHeader: 'Beware lets confirm',
      message: 'Simple responses',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('I care about humanity');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Let me think');
          }
        },
        {
          text: 'Maybe',
          handler: () => {
            console.log('Whatever');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  showPrompt() {
    this.alertController.create({
      header: 'Prompt Alert',
      subHeader: 'Enter information requested',
      message: 'Enter in what you want to say or aks',
      inputs: [
        {
          name: 'Want',
          placeholder: 'Eg.NY',

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Done!',
          handler: (data: any) => {
            console.log('Saved Information', data);
            this.selectedData = data;
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


}