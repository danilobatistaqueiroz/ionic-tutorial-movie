import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PreferencesService } from './services/preferences.service';
import { ContactsService } from './services/contacts.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CallsService } from './services/calls.service';
import { ChatsService } from './services/chats.service';

export function initializeFactory(init: PreferencesService) {
  return () => init.InitializeFirstAccess();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgbModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreferencesService,
    ContactsService,
    CallsService,
    ChatsService,
    { provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [PreferencesService],
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
