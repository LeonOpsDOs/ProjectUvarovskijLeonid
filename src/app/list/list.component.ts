import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import buncer1 from '../registring/buncers/buncer1.json';
// @ts-ignore
import buncer2 from '../registring/buncers/buncer2.json';
// @ts-ignore
import buncer3 from '../registring/buncers/buncer3.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
  n : any

  PersonList1:{name:string,address:string}[]=buncer1
  PersonList2:{name:string,address:string}[]=buncer2
  PersonList3:{name:string,address:string}[]=buncer3
  buncer:any = this.PersonList1;
  extentedBuncer(){

    if (this.n==1 ){
      this.buncer = this.PersonList1
      this.xN = this.tablestr1.length

      this.tablestrNONE = this.tablestr1
      this.tablestr = this.tablestrNONE
      this.tablestr1 = this.tablestr
    }
    if (this.n==2){
      this.buncer = this.PersonList2

      this.xN = this.tablestr2.length


      this.tablestrNONE = this.tablestr2
      this.tablestr = this.tablestrNONE
      this.tablestr2 = this.tablestr
    }
    if (this.n==3){
      this.buncer = this.PersonList3
      this.xN = this.tablestr3.length

      this.tablestrNONE = this.tablestr3
      this.tablestr = this.tablestrNONE
      this.tablestr3 = this.tablestr
    }
  }

  allItems1 = [
  ];
  allItems2 = [
  ];

  ///
  tablestr = [1,2]
  tablestrNONE = []
  tablestr1 = [1,2]
  tablestr2 = [1,2]
  tablestr3 = [1,2]

  m = this.buncer.length
  x = 0
  xN = 0


  modalBuncer(n: number) {
    if (n==1){
      prompt('title');
    }
    if (n==2){
      prompt('title');
    }
    if (n==3){
      prompt('title');
    }
  }
}
