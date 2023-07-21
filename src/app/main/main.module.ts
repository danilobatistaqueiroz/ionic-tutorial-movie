import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { ScenesComponent } from '../tutorial/scenes/scenes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbPopoverModule,
    MainPageRoutingModule
  ],
  declarations: [MainPage, ScenesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainPageModule {}
