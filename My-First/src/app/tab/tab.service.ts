import { Injectable } from '@angular/core';

@Injectable()
export class tabService{
    tabs = [{name:'Balgopal',price:40.45,date: new Date()},{name:'Papu Patro',price:67.678,date: new Date()},
                {name:'BG Patro',price:68.678,date: new Date()}]
    getTabs(){
        return this.tabs;
    }
}