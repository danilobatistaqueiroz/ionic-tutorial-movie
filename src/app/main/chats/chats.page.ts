import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';
import { ChatsService } from 'src/app/services/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
})
export class ChatsPage implements OnInit, AfterViewInit {

  @ViewChild('content') content!: ElementRef;
  @ViewChild('inicial') inicial!: ElementRef;
  @ViewChild('popover') popover!: any;

  closeResult = '';
  page:number=0;

  msg = '/assets/icon/message-square.svg';

  isOpen = false;

  allFade:boolean[]=[];

  chats:Chat[]=[];

  checkedTrash:boolean=false;
  checkedBookmark:boolean=true;
  checkedFire:boolean=true;
  checkedMoney:boolean=false;

  constructor(public preferences: PreferencesService, private modalService: NgbModal, private router: Router, private chatsService:ChatsService) { }

  ngAfterViewInit(): void {
    setTimeout(()=>this.page=1,1300);
  }

  ngOnInit(): void {
    this.chatsService.getChats().subscribe(c => {
      this.chats=c;
    });
  }

  close() {
    this.preferences.setFirstAccess('false');
    //setTimeout(()=>this.open(''),2000);
  }

  newMessage(){
    this.router.navigate(['contacts']);
  }

  next(){
    this.page=2;
  }

  selectChat(chat:Chat){
    chat.active=true;
    setTimeout(()=>{
      chat.active=false;
      this.router.navigate(['contact-chat',chat.id]);
    },500);
  }

  checkTrash(){
    this.checkedTrash=!this.checkedTrash;
  }
  checkBookmark() {
    this.checkedBookmark=!this.checkedBookmark;
  }
  checkFire() {
    this.checkedFire=!this.checkedFire;
  }
  checkMoney() {
    this.checkedMoney=!this.checkedMoney;
  }

  open(content: any) {
    this.modalService.open(content, { fullscreen: true, ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
