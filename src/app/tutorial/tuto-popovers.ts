import { environment } from "src/environments/environment";
import { PreferencesService } from '../services/preferences.service';
import { Injectable } from "@angular/core";

@Injectable()
export class TutoPopovers {
    
    txtTabCalls="histórico de chamadas";
    txtDetailCall="clique numa chamada para ver os detalhes";
    txtTabChats="todas as conversas";
    txtDetailChat="detalhes do contato";
    txtFloatNewMsg="envie mensagens para teus amigos";

    constructor(public preferences: PreferencesService){
    }

    initTutorial(){
        if(this.preferences.isTutorial){
            setTimeout(()=>this.popoverCalls(),300);
            setTimeout(()=>this.popoverChats(),7000);
        }
    }
    initCalls(){
        if(this.preferences.isTutorial){
            setTimeout(()=>this.popoverDetailCall(),4000);
        }
    }
    initChats(){
        if(this.preferences.isTutorial) {
            setTimeout(()=>this.popoverDetailChat(),3000);
            setTimeout(()=>this.popoverFloatNewMsg(),6000);
            setTimeout(()=>this.preferences.setTutorial('false'),9000);
        }
    }
    finishTutorial(){
        this.preferences.setTutorial('false');
    }
    finishConfiguration(){
        this.preferences.setFirstConfiguration('false');
    }
    isTutorial():boolean{
        return this.preferences.isTutorial;
    }
    isFirstConfiguration():boolean{
        return this.preferences.isFirstConfiguration;
    }

    popoverDetailCall() {
        let els = document.querySelectorAll('.present-alert');
        console.log(els[5]);
        let bt = document.getElementById('btHiddenDetailCall');
        if (!bt)
            return;
        console.log(bt);
        console.log(bt);
        console.log(els[5]);
        els[5].appendChild(bt);
        let height = (els[5] as HTMLButtonElement).getBoundingClientRect().height / 2;
        bt.style.top = '-' + height + 'px';
        bt.style.left = '15px';
        bt.style.display = 'block';
        bt.style.position = 'relative';
        bt.click();
        setTimeout(() => bt?.click(), 3000);
    }
    popoverCalls() {
        let tab = document.getElementsByName('tabCalls')[0];
        setTimeout(() => tab.click(), 600);
        let bt = document.getElementsByName('btHiddenTabCalls')[0];
        let col = document.getElementsByName("col-tabs")[0];
        col.appendChild(bt);
        let width = tab.getBoundingClientRect().width;
        bt.style.top = '-5px';
        bt.style.left = '-' + width + 'px';
        bt.style.position = 'relative';
        bt.style.display = '';
        setTimeout(() => bt.click(), 1200);
        setTimeout(() => bt.click(), 3000);
    }
    popoverChats() {
        this.initChats();
        let tab = document.getElementsByName('tabChats')[0];
        setTimeout(() => tab.click(), 300);
        let bt = document.getElementsByName('btHiddenTabChats')[0];
        tab.insertAdjacentElement('beforebegin', bt);
        let width = tab.getBoundingClientRect().width/2;
        bt.style.left = width+'px';
        bt.style.position = 'relative';
        bt.style.display = '';
        setTimeout(() => bt.click(), 600);
        setTimeout(() => bt.click(), 3000);
    }
    popoverDetailChat() {
        let els = document.querySelectorAll('#content ul li');
        let bt = document.getElementById('btHiddenDetailChat');
        if (!bt)
            return;
        els[5].appendChild(bt);
        let img = document.querySelectorAll('#content ul li img')[5];
        let height = (img as HTMLImageElement).getBoundingClientRect().height / 2;
        bt.style.top = '-' + height + 'px';
        bt.style.left = (img as HTMLImageElement).getBoundingClientRect().width + 'px';
        bt.style.display = 'block';
        bt.style.position = 'relative';
        bt.click();
        setTimeout(() => bt?.click(), 3000);
    }
    popoverFloatNewMsg() {
        let el = document.querySelector('.float-row .center-block');
        let bt = document.getElementById('btHiddenFloatNewMsg');
        if (!bt)
            return;
        el?.appendChild(bt);
        let img = document.querySelector('.button-new-message');
        let height = (img as HTMLImageElement).getBoundingClientRect().height / 2;
        let width = (img as HTMLImageElement).getBoundingClientRect().width;
        bt.style.top = '-' + height + 'px';
        bt.style.left = '-' + width + 'px';
        bt.style.position = 'relative';
        bt.click();
        setTimeout(() => bt?.click(), 3000);
    }
}