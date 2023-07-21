import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss'],
})
export class ScenesComponent  implements OnInit {

  scenes:Scene[]=[
    {
      imgSrc:"assets/tutorial/avatar.png",
      imgTop:'-150px',
      imgLeft:'-300px',
      msgTop:'-160px',
      msgLeft:'-620px',
      arrowSide:'right-arrow'
    },
    {
      imgSrc:"assets/tutorial/floating.png",
      imgTop:'700px',
      imgLeft:'800px',
      msgTop:'',
      msgLeft:'',
      arrowSide:'left-arrow'
    },
    {
      imgSrc:"assets/tutorial/telefone.png",
      imgTop:'200px',
      imgLeft:'800px',
      msgTop:'',
      msgLeft:'',
      arrowSide:'top-arrow'
    },
    {
      imgSrc:"assets/tutorial/conversas.png",
      imgTop:'100px',
      imgLeft:'300px',
      msgTop:'',
      msgLeft:'',
      arrowSide:'bottom-arrow'
    }
  ];
  backdropVisible:boolean=true;
  scene:number=-1;

  constructor() { }

  ngOnInit() {}

  nextScene() {
    this.scene++;
    if(this.scene==this.scenes.length){
      this.backdropVisible=false;
      return;
    }
    let img:HTMLImageElement|null = document.querySelector("#backdrop-box #scene-img");
    let popover:HTMLDivElement|null = document.querySelector(".popover-content");
    if(img && popover){
      img.src=this.scenes[this.scene].imgSrc;
      img.style.top=this.scenes[this.scene].imgTop;
      img.style.left=this.scenes[this.scene].imgLeft;
      popover.style.top=this.scenes[this.scene].msgTop;
      popover.style.left=this.scenes[this.scene].msgLeft;
      this.scenes.forEach(s => popover?.classList.remove(s.arrowSide));
      popover.classList.add(this.scenes[this.scene].arrowSide);
    }
  }
  
}

class Scene {
  constructor(public imgSrc:string, public imgTop:string, public imgLeft:string, public msgTop:string, public msgLeft:string, public arrowSide:string) {

  }
}