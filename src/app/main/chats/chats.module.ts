import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatsPage } from './chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbPopoverModule,
    ChatsPageRoutingModule
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
