import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit, AfterViewInit {

  @ViewChild('content') content!: ElementRef;
  @ViewChild('inicial') inicial!: ElementRef;
  @ViewChild('popover') popover!: any;

  closeResult = '';
  page:number=0;

  tutorialText:string='';

  msg = '/assets/icon/message-square.svg';

  isOpen = false;

  allFade:boolean[]=[];
  avatars:any[]=[
    {id:1,img:"animal.png",txt:"Hello! I'm going to school now!",active:false,unread:false},
    {id:2,img:"aquaman.png",txt:"For what reason would it be advisable for me to think about business content?",active:false},
    {id:3,img:"arab.png",txt:"Thank you for your believe in our supports",active:false,unread:true},
    {id:4,img:"basketball.png",txt:"Long time no see! Tomorrow office. will be free on sunday.",active:false,unread:false},
    {id:5,img:"bear.png",txt:"I want a beer!",active:false,unread:false},
    {id:6,img:"boy.png",txt:"I got a job offer in Melbourne and my working visa will be sponsored by the company.",active:false,unread:false},
    {id:7,img:"cat.png",txt:"I love your vlog. You are doing absolutely amazing by sharing all this info",active:false,unread:false},
    {id:8,img:"clown.png",txt:"Michelle is literally the most adorable clown ever.",active:false,unread:false},
    {id:9,img:"cow.png",txt:"Cows can weigh over 1,000 pounds and stand over 6 feet tall at their shoulders.",active:false,unread:false},
    {id:10,img:"doberman.png",txt:"Send me a bone! Please!",active:false,unread:false},
    {id:11,img:"dog.png",txt:"I'm hungry!",active:false,unread:false},
    {id:12,img:"dolphin.png",txt:"The sea isn't easy today!",active:false,unread:false},
    {id:13,img:"duck.png",txt:"I can fly, run, walk, and swim",active:false,unread:false},
    {id:14,img:"girl.png",txt:"The date was wonderful!",active:false,unread:false},
    {id:15,img:"gorilla.png",txt:"A banana for you!",active:false,unread:false},
    {id:16,img:"gost.png",txt:"I was scared, but ok",active:false,unread:false},
    {id:17,img:"hero.png",txt:"All heros need to save the world",active:false,unread:false},
    {id:18,img:"invisible-man.png",txt:"Can you see my picture?",active:false,unread:false},
    {id:19,img:"lemur.png",txt:"Picture of forest",active:false,unread:false},
    {id:20,img:"lex.png",txt:"Superman is a boring man",active:false,unread:false},
    {id:21,img:"love-cat.png",txt:"My best friend",active:false,unread:false},
    {id:22,img:"man.png",txt:"New jobs in stack technologies!",active:false,unread:false},
    {id:23,img:"monstrix.png",txt:"Ungly is a good attribute",active:false,unread:false},
    {id:24,img:"ms.png",txt:"Digae has new features",active:false,unread:false},
    {id:25,img:"robot.png",txt:"Creating books using IA will never work",active:false,unread:false},
    {id:26,img:"spiderman.png",txt:"In the next movie",active:false,unread:false},
    {id:27,img:"ugly.png",txt:"Thanks for talking",active:false,unread:false},
    {id:28,img:"wale.png",txt:"Water",active:false,unread:false},
    {id:29,img:"woman.png",txt:"Today!",active:false,unread:false},
  ];

  checkedTrash:boolean=false;
  checkedBookmark:boolean=true;
  checkedFire:boolean=true;
  checkedMoney:boolean=false;

  constructor(public preferences: PreferencesService, private modalService: NgbModal, private router: Router) { }

  ngAfterViewInit(): void {
    setTimeout(()=>this.page=1,1300);
  }

  ngOnInit(): void {
    setTimeout(()=>this.presentPopover(),1000);
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

  selectChat(avatar:any){
    avatar.active=true;
    setTimeout(()=>{
      avatar.active=false;
      this.router.navigate(['contact-chat',avatar.id]);
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

  presentPopover() {
    let origin = document.getElementsByName('chamadas')[0];
    let top = this.getOffset(origin).top;
    let left = this.getOffset(origin).left;
    let bt = document.createElement('button');
    bt.style.top = (top+10)+'px';
    bt.style.left = (left+30)+'px';
    bt.style.position = 'fixed';
    bt.style.visibility = 'hidden';
    bt.innerHTML = 'OK';
    bt.addEventListener('click',ev => {
      this.popover.event = ev;
      this.popover.trigger='left-start';
      this.popover.side='left';
      this.tutorialText='Histórico das chamadas';
      this.isOpen = true;
    })
    document.body.appendChild(bt);
    bt.click();
  }

  getOffset(el:any) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
}
