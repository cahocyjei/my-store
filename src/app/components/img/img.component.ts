import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

@Input() img:string = " ";
@Output() load = new EventEmitter<string>();
imgDefault = "https://i.imgur.com/ZSljVDl.png";

  constructor() { }

  imgError(){
    this.img=this.imgDefault
  }

  loadImg(){
    console.log("log Hijo");
    this.load.emit(this.img);
  }

  ngOnInit(): void {

  }

}
