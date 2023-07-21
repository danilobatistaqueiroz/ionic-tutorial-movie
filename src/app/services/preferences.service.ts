import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';

@Injectable()
export class PreferencesService {

  isTutorial:boolean=true;
  isFirstConfiguration:boolean=true;
  
  async InitializeFirstAccess() {
    let tuto:GetResult = await Preferences.get({ key: 'tutorial' });
    if(tuto.value)
      this.isTutorial = (tuto.value==="true");

    let config:GetResult = await Preferences.get({ key: 'first-configuration' });
    if(config.value)
      this.isFirstConfiguration = (config.value==="true");
  }

  setTutorial(tutorial:string){
    Preferences.set({key: 'tutorial',value: tutorial});
    this.isTutorial=(tutorial==="true");
  }

  setFirstConfiguration(first:string){
    Preferences.set({key: 'first-configuration',value: first});
    this.isFirstConfiguration=(first==="true");
  }
}