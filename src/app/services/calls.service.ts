import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, Observer, Subscription, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Call } from '../models/call';

@Injectable()
export class CallsService {

  private calls: any[] = [
    { id: 1, img: "lex.png", name: "Lex", active: true, direction: 'receive', status: 'success', date: '6 de junho 18:23', unread:false },
    { id: 2, img: "invisible-man.png", name: "SeeU", active: false, direction: 'call', status: 'fail', date: '6 de junho 17:42', unread:true },
    { id: 3, img: "lex.png", name: "Lex", active: false, direction: 'call', status: 'success', date: '6 de junho 11:55' },
    { id: 4, img: "lex.png", name: "Lex", active: false, direction: 'receive', status: 'success', date: '3 de junho 07:16' },
    { id: 5, img: "lex.png", name: "Lex", active: true, direction: 'receive', status: 'fail', date: '2 de junho 21:20' },
    { id: 6, img: "boy.png", name: "Kiko's Games", active: false, direction: 'receive', status: 'fail', date: '2 de junho 21:20' },
    { id: 7, img: "lex.png", name: "Lex", active: false, direction: 'receive', status: 'success', date: '28 de maio 12:12' },
    { id: 8, img: "gorilla.png", name: "Gor", active: false, direction: 'receive', status: 'success', date: '10 de maio 21:00' },
    { id: 9, img: "gorilla.png", name: "Gor", active: false, direction: 'call', status: 'success', date: '5 de maio 20:10' },
    { id: 10, img: "doberman.png", name: "Doberdog", active: false, direction: 'receive', status: 'fail', date: '5 de maio 19:50' },
    { id: 11, img: "doberman.png", name: "Dr. Dog", active: false, direction: 'receive', status: 'success', date: '5 de maio 19:20' },
    { id: 12, img: "gorilla.png", name: "Dalfin", active: false, direction: 'call', status: 'success', date: '1 de maio 19:00' },
    { id: 13, img: "duck.png", name: "Dank", active: false, direction: 'call', status: 'success', date: '1 de maio 18:00' },
    { id: 14, img: "girl.png", name: "Gleys", active: false, direction: 'call', status: 'success', date: '1 de maio 17:00' },
    { id: 15, img: "gorilla.png", name: "Gor", active: false, direction: 'receive', status: 'success', date: '1 de maio 14:30' },
    { id: 16, img: "gost.png", name: "Phanton", active: false, direction: 'call', status: 'fail', date: '1 de maio 11:10' },
    { id: 17, img: "hero.png", name: "Deadpool", active: false, direction: 'call', status: 'success', date: '1 de maio 09:05' },
    { id: 18, img: "invisible-man.png", name: "SeeU", active: false, direction: 'call', status: 'success', date: '27 de abril 23:00' },
    { id: 19, img: "lemur.png", name: "Lemur", active: false, direction: 'call', status: 'fail', date: '26 de abril 23:10' },
    { id: 20, img: "lemur.png", name: "Lex", active: false, direction: 'call', status: 'success', date: '26 de abril 20:00' },
    { id: 21, img: "lemur.png", name: "Mimi", active: false, direction: 'receive', status: 'success', date: '20 de abril 17:00' },
    { id: 22, img: "lemur.png", name: "John", active: false, direction: 'receive', status: 'success', date: '20 de abril 14:31' },
    { id: 23, img: "gorilla.png", name: "Monstrix", active: false, direction: 'receive', status: 'fail', date: '20 de abril 12:00' },
    { id: 24, img: "gorilla.png", name: "Jenny", active: false, direction: 'receive', status: 'success', date: '20 de abril 10:23' },
    { id: 25, img: "gorilla.png", name: "Mr Robot", active: false, direction: 'call', status: 'success', date: '20 de abril 09:50' },
    { id: 26, img: "spiderman.png", name: "Peter Parker", active: false, direction: 'call', status: 'success', date: '10 de abril 17:00' },
    { id: 27, img: "ugly.png", name: "Tedy", active: false, direction: 'receive', status: 'success', date: '05 de abril 17:00' },
    { id: 28, img: "wale.png", name: "Moby", active: false, direction: 'receive', status: 'success', date: '04 de abril 11:30' },
    { id: 29, img: "woman.png", name: "Sib", active: false, direction: 'receive', status: 'fail', date: '02 de abril 21:25' },
  ];

  myObservable: Observable<Call[]> = of(this.calls);

  getCalls(): Observable<Call[]> {
    return this.myObservable;
  }

}