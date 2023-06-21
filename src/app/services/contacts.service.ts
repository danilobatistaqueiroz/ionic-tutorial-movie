import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, Observer, Subscription, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {
  
  private contacts:Contact[]=[
    {id:1,img:"animal.png",name:"Jonny",active:false},
    {id:2,img:"aquaman.png",name:"Aquaman",active:false},
    {id:3,img:"arab.png",name:"Arab Ieme",active:false},
    {id:4,img:"basketball.png",name:"Jonson Jordan",active:false},
    {id:5,img:"bear.png",name:"Bear B",active:false},
    {id:6,img:"boy.png",name:"Kiko's Games",active:false},
    {id:7,img:"cat.png",name:"Kitensy",active:false},
    {id:8,img:"clown.png",name:"The Joke",active:false},
    {id:9,img:"cow.png",name:"Beef Center Muuu",active:false},
    {id:10,img:"doberman.png",name:"Doberdog",active:false},
    {id:11,img:"dog.png",name:"Dr. Dog",active:false},
    {id:12,img:"dolphin.png",name:"Dalfin",active:false},
    {id:13,img:"duck.png",name:"Dank",active:false},
    {id:14,img:"girl.png",name:"Gleys",active:false},
    {id:15,img:"gorilla.png",name:"Gor",active:false},
    {id:16,img:"gost.png",name:"Phanton",active:false},
    {id:17,img:"hero.png",name:"Deadpool",active:false},
    {id:18,img:"invisible-man.png",name:"SeeU",active:false},
    {id:19,img:"lemur.png",name:"Lemur",active:false},
    {id:20,img:"lex.png",name:"Lex",active:false},
    {id:21,img:"love-cat.png",name:"Mimi",active:false},
    {id:22,img:"man.png",name:"John",active:false},
    {id:23,img:"monstrix.png",name:"Monstrix",active:false},
    {id:24,img:"ms.png",name:"Jenny",active:false},
    {id:25,img:"robot.png",name:"Mr Robot",active:false},
    {id:26,img:"spiderman.png",name:"Peter Parker",active:false},
    {id:27,img:"ugly.png",name:"Tedy",active:false},
    {id:28,img:"wale.png",name:"Moby",active:false},
    {id:29,img:"woman.png",name:"Sib",active:false},
  ];

  myObservable:Observable<Contact[]> = of(this.contacts);

  getContacts():Observable<Contact[]> {
    return this.myObservable;
  }

}