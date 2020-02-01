import { tabService } from './tab.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  title = "My Tab Components"
  constructor(private ts:tabService) {
    this.tabs = this.ts.getTabs();
   }

  
  tab = {name:'Bg',price:4000.45,date: new Date()}
  tabs = [{name:'Bg',price:40.45,date: new Date()},{name:'Papu',price:67.678,date: new Date()}]
  imgUrl = "https://cdn5.vectorstock.com/i/1000x1000/46/34/anonymous-mask-logo-hacker-icon-design-imag-vector-19944634.jpg"
  ngOnInit() {
  }

  clickEvent(tab){
      alert(tab.name);
  }

  currentStyle = {"font-style":"italic","color":"green"}


}
