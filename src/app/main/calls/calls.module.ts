import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgbPopoverModule,
    CallsPageRoutingModule
  ],
  declarations: [CallsPage]
})
export class CallsPageModule {}
