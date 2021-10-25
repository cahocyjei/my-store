import { Component, OnInit, Input, Output, EventEmitter,OnChanges,OnDestroy,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

@Input() img:string = " ";
@Output() load = new EventEmitter<string>();
imgDefault = "https://i.imgur.com/ZSljVDl.png";
counter= 0;
counterFn: number|undefined;

  constructor() { }

  imgError(){
    this.img=this.imgDefault
  }

  loadImg(){
    console.log("log Hijo");
    this.load.emit(this.img);
  }
  ngOnChanges(){
    //before of render and during
    console.log('onChanges','imagen=>',this.img)
}
  ngOnInit(): void {
    //before of render Asinc
    this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log('run counter')
    },1000)

  }
  ngAfterViewInit(){
    console.log('afterViwInit')

  }
  ngOnDestroy(){
    console.log('OnDestroy')
    window.clearInterval(this.counterFn);
  }

}
