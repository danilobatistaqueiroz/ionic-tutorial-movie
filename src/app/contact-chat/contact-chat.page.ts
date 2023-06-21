import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-chat',
  templateUrl: './contact-chat.page.html',
  styleUrls: ['./contact-chat.page.scss'],
})
export class ContactChatPage implements OnInit, OnDestroy {
  id?: number;
  private sub: any;
  contact:any;

  messages:any=[
    {owner:'I',txt:"hello!"},
    {owner:'Contact',txt:"hi!"},
    {owner:'I',txt:"can you see this?"},
    {owner:'Contact',txt:"the address is: street olden north, n 2000"},
    {owner:'Contact',txt:"the event begins at 14 hours"}
  ];

  msg = '/assets/icon/message-square.svg';

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.contactsService.getContacts().subscribe(contacts => {
        this.contact = contacts.filter(c=>c.id==this.id)[0];
      })
    });
  }

  newMessage(){
    
  }

}
