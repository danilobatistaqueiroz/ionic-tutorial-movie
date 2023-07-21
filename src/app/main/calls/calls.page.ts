import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Call } from 'src/app/models/call';
import { CallsService } from 'src/app/services/calls.service';
import { TutoPopovers } from 'src/app/tutorial/tuto-popovers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  calls:Call[]=[];

  constructor(public tutoPopovers: TutoPopovers, private alertController: AlertController, private callsService:CallsService) { }

  ngOnInit() {
    this.callsService.getCalls().subscribe(calls => {
      this.calls = calls;
    });
    this.tutoPopovers.initCalls();
  }

  selectCall(call:any){

  }

  async presentAlert(call:any) {
    const alert = await this.alertController.create({
      header: call.name,
      subHeader: call.date,
      message: 'duration:15:03 min',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
