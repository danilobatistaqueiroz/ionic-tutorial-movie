import { Injectable } from '@angular/core';
import { GetResult, Preferences } from '@capacitor/preferences';

@Injectable()
export class PreferencesService {
  
  async InitializeFirstAccess() {
    let result:GetResult = await Preferences.get({ key: 'first-access' });
    if(result.value)
      this.isFirstAccess = (result.value==="true");
  }
  setFirstAccess(first:string){
    Preferences.set({key: 'first-access',value: first});
    this.isFirstAccess=(first==="true");
  }
  isFirstAccess:boolean=true;
}