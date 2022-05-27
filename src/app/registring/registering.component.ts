import {Component, Input, OnInit} from '@angular/core';

// @ts-ignore
import buncer1 from './buncers/buncer1.json';
// @ts-ignore
import buncer2 from './buncers/buncer2.json';
// @ts-ignore
import buncer3 from './buncers/buncer3.json';
import {FormControl, FormGroup} from "@angular/forms";
import {DadataAddress, DadataConfig, DadataSuggestion, DadataType} from "@kolkov/ngx-dadata";




@Component({
  selector: 'app-registering',
  templateUrl: './registering.component.html',
  styleUrls: ['./registering.component.css','../../assets/base.css']
})
export class RegisteringComponent {
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
  tablestr = []
  tablestrNONE = []
  tablestr1 = []
  tablestr2 = []
  tablestr3 = []
  ///
  m = this.buncer.length
  x = 0
  xN = 0
  // @ts-ignore
  configAddress: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.address,
  };
  onAddressSelected(event: DadataSuggestion) {
    const addressData = event.data as DadataAddress;
    console.log(addressData);
  }
  configFio: DadataConfig = {
    apiKey: '2e51c5fbc1a60bd48face95951108560bf03f7d9',
    type: DadataType.fio,
  };
  xre(){
    if (this.xN>=100){
      alert('набрано 100 жителей')
      return
    }
    while (this.tablestr.length<this.m){
      this.xN = this.tablestr.length
      this.tablestr.push(this.xN)
    }
    this.xN = this.tablestr.length
    this.tablestr.push(this.xN)
  }


  addItem1(description: string) {
    this.allItems1.push({
      description,
    })

  }

  addItem2(description: string) {
    this.allItems2.push({
      description,
    });
  }
  @Input()
  clear

  ClearBunker(clear: any) {
    if (this.clear == 1) {
      this.PersonList1 = []
      this.clear = 0
      this.tablestr = []
    }
    if (this.clear == 2) {
      this.PersonList2 = []
      this.clear = 0
      this.tablestr = []
    }
    if (this.clear == 3) {
      this.PersonList3 = []
      this.clear = 0
      this.tablestr = []
    }
  }
  addItem(Name:string, Address:string,){
    this.ClearBunker(this.clear)
    this.buncer.push({name:Name,address:Address})
    JSON.stringify({name:Name,address:Address})
  }

  public userFormGroup = new FormGroup({
    FIO: new FormControl(''),
    address: new FormControl(''),
  });
  ReplaceBunker: { name: string, address: string }[]

  Replacer(FIO:string,address:string,number:string,bunker:string){

    if (bunker=='1') {
      this.ReplaceBunker = this.PersonList1
    }
    else if (bunker=='2') {
      this.ReplaceBunker = this.PersonList2
    }
    else if (bunker=='3') {
      this.ReplaceBunker = this.PersonList3
    }
    // @ts-ignore
    this.ReplaceBunker[number-1] = { name: FIO, address: address }
  }
}
