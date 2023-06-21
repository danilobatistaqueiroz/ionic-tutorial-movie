import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts:Contact[]=[];

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(c => {
      this.contacts=c;
    });
  }

  selectContact(contact:any){
    contact.active=true;
    setTimeout(()=>{
      contact.active=false;
      this.router.navigate(['contact-chat',contact.id]);
    },500);
  }

}
