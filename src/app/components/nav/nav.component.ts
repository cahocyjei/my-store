import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  active_menu= false;
  @Input() counter= 0;


  constructor() { }

  ngOnInit(): void {
  }
  toggled_button(){
    this.active_menu= !this.active_menu;
  }

}
