import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PreferencesService } from './services/preferences.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function initializeFactory(init: PreferencesService) {
  return () => init.InitializeFirstAccess();
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgbModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PreferencesService,
    { provide: APP_INITIALIZER,
      useFactory: initializeFactory,
      deps: [PreferencesService],
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
