import { tabService } from './tab/tab.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-First';

  constructor(private TabService:tabService){
    console.log("From AppComponent : ")  
    console.log(this.TabService.getTabs());
  }
}
